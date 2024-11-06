import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-skill-management',
  templateUrl: './skill-management.component.html',
  styleUrls: ['./skill-management.component.css']
})
export class SkillManagementComponent implements OnInit {
  skillForm!: FormGroup;
  skills: any[] = [];
  editingSkill: any | null = null;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.skillForm = this.fb.group({
      SKILL_NAME: [''],
      SKILL_TYPE: [''],
      DESCRIPTION: ['']
    });
    this.loadSkills();
  }

  loadSkills(): void {
    // Mock data
    this.skills = [
      { SKILL_ID: 1, SKILL_NAME: 'JavaScript', SKILL_TYPE: 'Programming', DESCRIPTION: 'JavaScript programming language' },
      { SKILL_ID: 2, SKILL_NAME: 'Angular', SKILL_TYPE: 'Framework', DESCRIPTION: 'Angular framework for building web applications' }
    ];
  }

  onSubmit(): void {
    if (this.editingSkill) {
      const updatedSkill = { ...this.editingSkill, ...this.skillForm.value };
      const index = this.skills.findIndex(skill => skill.SKILL_ID === updatedSkill.SKILL_ID);
      this.skills[index] = updatedSkill;
      this.editingSkill = null;
      this.skillForm.reset();
    } else {
      const newSkill = { ...this.skillForm.value, SKILL_ID: this.skills.length + 1 };
      this.skills.push(newSkill);
      this.skillForm.reset();
    }
  }

  editSkill(skill: any): void {
    this.editingSkill = skill;
    this.skillForm.patchValue(skill);
  }

  deleteSkill(skillId: number): void {
    this.skills = this.skills.filter(skill => skill.SKILL_ID !== skillId);
  }
}
