import { Component, OnInit } from '@angular/core';
import { CandidateService } from '../../services/candidate.service';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-candidate-home',
  templateUrl: './candidate-home.component.html',
  styleUrls: ['./candidate-home.component.css']
})
export class CandidateHomeComponent implements OnInit {
  job_description: any[] = [];
  pending:boolean=false;
  message:string='';
  status:string='';
  constructor(private candidate_service: CandidateService) {
   
  }

  ngOnInit(): void {
    this.getAllJob();
  }

  getAllJob() {
    this.job_description = this.candidate_service.getAllJobs().map(job => ({
      ...job,
      showMore: false
    }));
    console.log(this.job_description);
  }

  toggleReadMore(job: any) {
    job.showMore = !job.showMore;
  }

  state(){
    if(this.pending===false){
    this.pending=true;
    this.status="Status-Pending";
    this.message = '';
    }
    else{
      this.status="";
       this.message="You already applied"
    }
  }

}
