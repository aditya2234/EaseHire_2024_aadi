import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  private apiUrl = 'https://g50fee11f63aa4c-jkuqq5cm0d4x1svt.adb.ap-mumbai-1.oraclecloudapps.com/ords/rishabh_chowdhury1/skills';

  constructor(private http: HttpClient) {}

  getSkills(): Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}/getskills`)
      .pipe(catchError(this.handleError));
  }

  addSkill(skill: any): Observable<any> {
    console.log(skill);
    
    return this.http.post<any>(`${this.apiUrl}/addskill/`, skill)
      .pipe(catchError(this.handleError));
  }

  getSkillById(skillId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/getskills/${skillId}`)
      .pipe(catchError(this.handleError));
  }

  updateSkill(skillId: number, skill: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/updateskill/${skillId}`, skill)
      .pipe(catchError(this.handleError));
  }
  
  deleteSkill(skillId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/deleteskill/${skillId}`)
      .pipe(catchError(this.handleError));
  }
  private handleError(error: HttpErrorResponse) {
    console.error('An error occurred:', error.message);
    return throwError('Something went wrong; please try again later.');
  }
}
