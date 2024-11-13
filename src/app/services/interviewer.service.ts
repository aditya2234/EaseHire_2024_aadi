import { Injectable } from '@angular/core';
// import {internalJobPostings} from '../../internalJobPosting.json';
// import {candidates} from '../../candidateDetails.json';
import {scheduleInterviews} from '../../scheduleInterview.json';
// import {interviewers} from '../../interviewerDetails.json';

@Injectable({
  providedIn: 'root'
})
export class InterviewerService {

  constructor() { }

  getAllScheduleInterview(){
    return scheduleInterviews;
  }

  // getAllCandidates(){
  //   return candidates;
  // }

  // getAllJob(){
  //   return internalJobPostings;
  // }
  // getAllInterviewer(){
  //   return interviewers;
  // }
}
