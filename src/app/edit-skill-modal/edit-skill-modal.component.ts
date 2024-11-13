import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SkillService } from '../services/skill-management.service';


@Component({
  selector: 'app-edit-skill-modal',
  templateUrl: './edit-skill-modal.component.html',
  styleUrls: ['./edit-skill-modal.component.css']
})
export class EditSkillModalComponent implements OnInit {
  skillForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private skillService: SkillService,
    public dialogRef: MatDialogRef<EditSkillModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.skillForm = this.fb.group({
      skill_name: [this.data.skill_name],
      skill_type: [this.data.skill_type],
    });
  }

  onSave(): void {
    const updatedSkill = { ...this.data, ...this.skillForm.value };
    this.skillService.updateSkill(this.data.skill_id, updatedSkill).subscribe(
      () => {
        this.dialogRef.close(updatedSkill);
      },
      (error) => {
        console.error('Error updating skill:', error);
      }
    );
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
