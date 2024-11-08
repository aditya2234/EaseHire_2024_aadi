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


  constructor(private fb: FormBuilder, private skillService:SkillService) {}

  ngOnInit(): void {
    this.skillForm = this.fb.group({
      SKILL_NAME: [''],
      SKILL_TYPE: [''],
      DESCRIPTION: ['']
    });
    this.loadSkills();
  }

  loadSkills(): void {
    this.skillService.getSkills().subscribe((data:any) => {
      console.log(data); 
      this.skills = data.items || data; 
    });
  }

  onSubmit(): void {
    if (this.editingSkill) {
      const updatedSkill = { ...this.editingSkill, ...this.skillForm.value };
      this.skillService.updateSkill(updatedSkill).subscribe(() => {
        this.loadSkills();
        this.editingSkill = null;
        this.skillForm.reset();
      });
    } else {
      this.skillService.addSkill(this.skillForm.value).subscribe(() => {
        this.loadSkills();
        this.skillForm.reset();
      });
    }
  }

  editSkill(skill: any): void {
    this.skillService.getSkillById(skill.SKILL_ID).subscribe((data:any) => {
      this.editingSkill = data;
      this.skillForm.patchValue(data);
    });
  }

  deleteSkill(skillId: number): void {
    this.skillService.deleteSkill(skillId).subscribe(() => {
      this.loadSkills();
    });
  }
}
