import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CandidateOnboardingService } from '../../services/candidate-onboarding.service';
import { Candidate } from '../../models/candidate';
import { Router } from '@angular/router';

@Component({
  selector: 'app-candidate-onboarding-view-delete',
  templateUrl: './candidate-onboarding-view-delete.component.html',
  styleUrl: './candidate-onboarding-view-delete.component.css'
})
export class CandidateOnboardingViewDeleteComponent {

  steps:any=0;
  candidates: Candidate[]=[];//for getting all candidate details
  candidatesforEdit: Candidate[]=[];//for getting all candidate details
  candidateForm:FormGroup;
  editCandidateForm:FormGroup;
  updateCandidate:boolean=false;
  idd: number | undefined;

  clickOnImage:boolean=false;

  constructor(private candidateOnboardService:CandidateOnboardingService, private fb:FormBuilder,private router:Router){
    this.candidateForm=fb.group({
      firstname:['',[Validators.required]],
      lastname:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      phoneno:['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      currentCompany:['',[Validators.required]],
      lastWorkingDay:['',[Validators.required]],
      expectedCtc:['',[Validators.required]],
      PrefferedLocation:['',[Validators.required]],
      tentativeJoiningDate:['',[Validators.required]],
      gender:['',[Validators.required]],
      panNo:['',[Validators.required]],
      addhar:['',[Validators.required]],
      referralSource:['',[Validators.required]]
    });
    this.editCandidateForm=fb.group({
      firstname:['',[Validators.required]],
      lastname:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      phoneno:['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      currentCompany:['',[Validators.required]],
      lastWorkingDay:['',[Validators.required]],
      expectedCtc:['',[Validators.required]],
      PrefferedLocation:['',[Validators.required]],
      tentativeJoiningDate:['',[Validators.required]],
      gender:['',[Validators.required]],
      panNo:['',[Validators.required]],
      addhar:['',[Validators.required]],
      referralSource:['',[Validators.required]]
    });
    
  }
  
  ngOnInit():void{
  
    this.getAllCandidateDetails();
  }


  // for get all candidate details
 public getAllCandidateDetails(){
  return this.candidateOnboardService.getAllCandidates().subscribe(data =>{
    this.candidates=data;
    this.candidatesforEdit=this.candidates;
    console.log("Data",this.candidates);
  });
 }


 // for delete candidate
public deleteCandidate(id:number){
  this.candidateOnboardService.deleteCandidate(id).subscribe(x=>{
    console.log("Deleted success",x);
    this.getAllCandidateDetails();
  });
  console.log("U just deleted and refresh");
}


editCandidate(id:number){

}

addCandidates(){
  this.clickOnImage=true;
  // this.router.navigate(['/addView'])
}

}
