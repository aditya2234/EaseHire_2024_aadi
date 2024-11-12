import { Component, OnInit } from '@angular/core';
import { InterviewerService } from '../../services/interviewer.service';
import { CandidateService } from '../../services/candidate.service';

@Component({
  selector: 'app-pmo-home',
  templateUrl: './pmo-home.component.html',
  styleUrls: ['./pmo-home.component.css']
})
export class PmoHomeComponent implements OnInit {
  selectedInterviewer: any = null;
  selectedJob: any = null;
  selectedCandidate: any = null;
  schedules: any = [];
  job_description: any = [];

  constructor(private interviewerService: InterviewerService, private candidate_service:CandidateService) {}

  ngOnInit(): void {
    this.getAllSchedule();
    this.getAllJob();
  }

  getAllSchedule() {
    this.schedules = this.interviewerService.getAllScheduleInterview();
    this.sortSchedules();
    console.log("schedules", JSON.stringify(this.schedules));
  }

  getAllJob() {
    this.job_description = this.candidate_service.getAllJobs().map(job => ({
      ...job,
      showMore: false
    }));
    console.log(this.job_description);
  }

  showJobDetails(job: any) {
    this.selectedJob = job;
  }

  closeJobDetails() {
    this.selectedJob = null;
  }

  showCandidateDetails(candidate: any) {
    this.selectedCandidate = candidate;
  }

  closeCandidateDetails() {
    this.selectedCandidate = null;
  }

  showInterviewer(interviewer: any) {
    this.selectedInterviewer = interviewer;
  }

  closeInterviewerDetails() {
    this.selectedInterviewer = null;
  }

  toggleReadMore(job: any) {
    job.showMore = !job.showMore;
  }

  invite(schedule: any) {
    console.log('Inviting for schedule:', schedule);
  }

  sortSchedules() {
    const currentDate = new Date();
    console.log("Current date", currentDate);
    const today = this.formatDate(currentDate); // Get current date in dd-mm-yyyy format
    console.log("Formatted date", today);

    // Separate today's schedules and future schedules
    const todaySchedules = this.schedules.filter((schedule: any) => {
      const scheduleDate = this.parseDate(schedule.date, schedule.time);
      return this.formatDate(scheduleDate) === today;
    });

    const futureSchedules = this.schedules.filter((schedule: any) => {
      const scheduleDate = this.parseDate(schedule.date, schedule.time);
      return this.formatDate(scheduleDate) !== today;
    });

    // Sort today's schedules by time, prioritizing the closest upcoming time
    todaySchedules.sort((a: any, b: any) => {
      const timeA = this.parseDate(a.date, a.time).getTime();
      const timeB = this.parseDate(b.date, b.time).getTime();
      return timeA - timeB;
    });

    // Sort future schedules by date and time
    futureSchedules.sort((a: any, b: any) => {
      const dateA = this.parseDate(a.date, a.time).getTime();
      const dateB = this.parseDate(b.date, b.time).getTime();
      return dateA - dateB;
    });

    // Combine today's schedules and future schedules
    this.schedules = [...todaySchedules, ...futureSchedules];
  }

  parseDate(date: string, time: string): Date {
    const [day, month, year] = date.split('-').map(Number);
    const [hours, minutes] = this.convertTimeTo24HourFormat(time);
    return new Date(year, month - 1, day, hours, minutes);
  }

  convertTimeTo24HourFormat(time: string): [number, number] {
    const [timePart, modifier] = time.split(' ');
    let [hours, minutes] = timePart.split(':').map(Number);

    if (modifier === 'PM' && hours < 12) {
      hours += 12;
    }
    if (modifier === 'AM' && hours === 12) {
      hours = 0;
    }

    return [hours, minutes];
  }

  formatDate(date: Date): string {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }

}
