import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {


  constructor() { }
  navbar_options = {
    option1: {
      home: "Home",
      assessment: "Assessment",
      interview: "Interview",
      schedule: "Schedule"
    },
    option2: {
      home: "Home",
      marks: "Marks",
      assessment: "Assessment",
      schedule: "Schedule"
    },
    option3:{
      candidate:"Candidate",
      interviewer:"Interviewer",
      
    }
  };
}


