import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { EditSkillModalComponent } from '../../edit-skill-modal/edit-skill-modal.component';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SkillService } from '../../services/skill-management.service';

@Component({
  selector: 'app-skill-management',
  templateUrl: './skill-management.component.html',
  styleUrls: ['./skill-management.component.css']
})
export class SkillManagementComponent implements OnInit {
  skillForm!: FormGroup;
  skills: any[] = [];
  filteredSkills: any[] = [];
  searchTermType: string = '';
  searchTermName: string = '';
  editingSkill: any | null = null;
  existingEditDialogRef: MatDialogRef<EditSkillModalComponent, any> | null = null;

  constructor(private fb: FormBuilder, private skillService: SkillService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.skillForm = this.fb.group({
      skill_name: [''],
      skill_type: [''],
      search: ['']
    });
    this.loadSkills();
  }

  loadSkills(): void {
    this.skillService.getSkills().subscribe(
      (data: any) => {
        this.skills = data.items || data;
        this.filteredSkills = this.skills;
        console.log(this.skills);
      },
      (error) => {
        console.error('Error loading skills:', error);
      }
    );
  }

  filterSkills(): void {
    const searchValueType = this.searchTermType.toLowerCase();
    const searchValueName = this.searchTermName.toLowerCase();
    this.filteredSkills = this.skills.filter(skill =>
      skill.skill_type.toLowerCase().includes(searchValueType) &&
      skill.skill_name.toLowerCase().includes(searchValueName)
    );
  }

  onSubmit(): void {
    if (this.editingSkill) {
      const updatedSkill = { ...this.editingSkill, ...this.skillForm.value };
      this.skillService.updateSkill(this.editingSkill.skill_id, updatedSkill).subscribe(
        () => {
          this.loadSkills();
          this.editingSkill = null;
          this.skillForm.reset();
          console.log('Skill updated:', this.skillForm.value);
        },
        (error) => {
          console.error('Error updating skill:', error);
        }
      );
    } else {
      this.skillService.addSkill(this.skillForm.value).subscribe(
        () => {
          this.loadSkills();
          this.skillForm.reset();
          console.log('Skill added:', this.skillForm.value);
        },
        (error) => {
          console.error('Error adding skill:', error);
        }
      );
    }
  }

  editSkill(skill_id: any): void {
    console.log('Edit button clicked', skill_id);
    this.skillService.getSkillById(skill_id).subscribe(
      (data: any) => {
        console.log('Fetched skill data:', data);
        const dialogConfig = new MatDialogConfig();
        dialogConfig.width = '60%';
        dialogConfig.height = '400px';
        dialogConfig.data = { ...data, skill_id };
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;

        if (this.existingEditDialogRef != null) {
          return;
        }

        const dialogRef = this.dialog.open(EditSkillModalComponent, dialogConfig);
        this.existingEditDialogRef = dialogRef;
        dialogRef.afterClosed().subscribe(result => {
          if (result) {
            this.loadSkills();
          }
          this.existingEditDialogRef = null;
        });
      },
      (error) => {
        console.error('Error fetching skill:', error);
      }
    );
  }

  deleteSkill(skillId: number): void {
    console.log('Delete button clicked', skillId);
    this.skillService.deleteSkill(skillId).subscribe(
      () => {
        this.loadSkills();
      },
      (error) => {
        console.error('Error deleting skill:', error);
      }
    );
  }
}
