import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
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
  editingSkill: any | null = null;

  constructor(private fb: FormBuilder, private skillService: SkillService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.skillForm = this.fb.group({
      skill_name: [''],
      skill_type: [''],
    });
    this.loadSkills();
  }

  loadSkills(): void {
    this.skillService.getSkills().subscribe(
      (data: any) => {
        this.skills = data.items || data;
        console.log(this.skills);
      },
      (error) => {
        console.error('Error loading skills:', error);
      }
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
        dialogConfig.width = '400px';
        dialogConfig.data = { ...data, skill_id };
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;

        const dialogRef = this.dialog.open(EditSkillModalComponent, dialogConfig);

        dialogRef.afterClosed().subscribe(result => {
          if (result) {
            this.loadSkills();
          }
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
