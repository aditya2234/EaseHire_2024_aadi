import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { CandidateOnboardingService } from '../../services/candidate-onboarding.service';
import { Candidate, CandidateSkill } from '../../models/candidate';

@Component({
  selector: 'app-candidate-onboarding-add-edit',
  templateUrl: './candidate-onboarding-add-edit.component.html',
  styleUrls: ['./candidate-onboarding-add-edit.component.css']
})
export class CandidateOnboardingAddEditComponent {
  steps: number = 3;
  addCandidate: boolean = true;
  showCandidate: boolean = false;
  candidates: Candidate[] = [];
  candidatesforEdit: Candidate[] = [];
  candidateForm: FormGroup;
  // editCandidateForm: FormGroup;
  updateCandidate: boolean = false;
  idd: number | undefined;

  skills: CandidateSkill[] = [
    { skillId: 1, skillName: 'JavaScript' },
    { skillId: 2, skillName: 'TypeScript' },
    { skillId: 3, skillName: 'Angular' },
    { skillId: 4, skillName: 'React' }
  ];
  selectedSkills: CandidateSkill[] = [];
  output: any;

  constructor(private candidateOnboardService: CandidateOnboardingService, private fb: FormBuilder) {
    this.candidateForm = fb.group({
      candidateDetails: this.fb.group({
        firstname: ['', [Validators.required]],
        lastname: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        phoneno: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
        currentCompany: ['', [Validators.required]],
        lastWorkingDay: ['', [Validators.required]],
        currentCtc: ['', [Validators.required]],
        expectedCtc: ['', [Validators.required]],
        PrefferedLocation: ['', [Validators.required]],
        tentativeJoiningDate: ['', [Validators.required]],
        gender: ['', [Validators.required]],
        panNo: ['', [Validators.required]],
        addhar: ['', [Validators.required]],
        referralSource: ['', [Validators.required]]
      }),
      candidateSkills: this.fb.array([])
    });
  }

  get candidateSkills(): FormArray {
    return this.candidateForm.get('candidateSkills') as FormArray;
  }

  onSkillChange() {
    this.selectedSkills.forEach((skill: CandidateSkill) => {
      const existingSkill = this.candidateSkills.controls.find(control => control.value.skillId === skill.skillId);
      if (!existingSkill) {
        this.candidateSkills.push(this.fb.group({
          skillId: [skill.skillId, Validators.required],
          skillName: [skill.skillName, Validators.required],
          skillRate: ['', [Validators.required, Validators.min(1), Validators.max(5)]]
        }));
      }
    });
  }

  saveCandidate() {
    const formValue = this.candidateForm.value;
    this.output = {
      candidateDetails: {
        ...formValue.candidateDetails,
        candidateSkills: formValue.candidateSkills.map((skill: any) => ({
          skillId: skill.skillId,
          skillName: skill.skillName,
          skillRate: skill.skillRate
        }))
      }
    };
    console.log(this.output)
    // this.steps = 4; // Move to step 4 to display the output
  }


    stepmakerNext(){
    this.steps++;
  
  }
  stepmakerPrevious(){
    this.steps--;
  }
}

