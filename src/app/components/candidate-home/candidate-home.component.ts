import { Component, OnInit } from '@angular/core';
import { CandidateService } from '../../services/candidate.service';

@Component({
  selector: 'app-candidate-home',
  templateUrl: './candidate-home.component.html',
  styleUrls: ['./candidate-home.component.css']
})
export class CandidateHomeComponent implements OnInit {
  job_description: any[] = [];

  constructor(private candidate_service: CandidateService) {}

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
}
