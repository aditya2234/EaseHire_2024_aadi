import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {internalJobPostings} from '../../internalJobPosting.json'

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  
  constructor() {

  }
  getAllJobs(){
    return internalJobPostings;
  }
}
