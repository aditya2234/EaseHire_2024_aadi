import { Component } from '@angular/core';
import { Candidate } from '../../models/candidate';
import { CandidateOnboardingService } from '../../services/candidate-onboarding.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-candidate-onboarding',
  templateUrl: './candidate-onboarding.component.html',
  styleUrl: './candidate-onboarding.component.css'
})
export class CandidateOnboardingComponent {

  
  steps:any=0;
  addCandidate:boolean=false;
  showCandidate:boolean=false;
  candidates: Candidate[]=[];//for getting all candidate details
  candidatesforEdit: Candidate[]=[];//for getting all candidate details
  candidateForm:FormGroup;
  editCandidateForm:FormGroup;
  updateCandidate:boolean=false;
  idd: number | undefined;

constructor(private candidateOnboardService:CandidateOnboardingService, private fb:FormBuilder){
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


//  edit


//  for post candidate 
public saveCandidate(){
 
  if(this.candidateForm.valid){
    let candid=this.candidateForm.value;
    console.log("candidd",candid);
    this.candidateOnboardService.addCandidate(candid).subscribe(x =>{
      console.log("Post data",x);
      this.getAllCandidateDetails();
    });
    this.candidateForm.reset();
    
  }
}




// for delete candidate
public deleteCandidate(id:number){
  this.candidateOnboardService.deleteCandidate(id).subscribe(x=>{
    console.log("Deleted success",x);
    this.getAllCandidateDetails();
  });
  console.log("U just deleted and refresh");
}

// for editing candidate and it give id and check whether the data is present or not
// public editCandidate(id: number) {
//   this.showCandidate=false;
//   console.log(id)
//   let currentCandidate = this.candidatesforEdit.find((p) => p.CANDIDATE_ID === id);
//   this.idd=id;
//   if (currentCandidate) {
//     this.editCandidateForm.patchValue(currentCandidate);
//     this.updateCandidate = true;
//   }
// }




// call to backend and update the values to the backend
public updateCandidates() {
  console.log("hey i am in update");
  if (this.editCandidateForm.valid) {
    let updateCandidate = this.editCandidateForm.value;
    console.log("id and update", this.idd, updateCandidate);
    if (this.idd) {
      this.candidateOnboardService.editCandidateById(this.idd, updateCandidate).subscribe(response => {
        console.log("Edited successfully", response);
        this.getAllCandidateDetails();
        this.updateCandidate = false;
        this.showCandidate = true;
        this.editCandidateForm.reset();
      }, error => {
        console.error("Error updating candidate", error);
      });
    }
  }
}


addCandidates(){
  this.updateCandidate=false;
  // this.candidateForm.reset();
  this.addCandidate=true;
  this.showCandidate=false;
  }

showCandidates(){
  this.updateCandidate=false;
  this.addCandidate=false;
this.showCandidate=true;
}



stepmakerNext(){
  this.steps=this.steps+1;
}
stepmakerPrevious(){
  this.steps=this.steps-1;
}
}