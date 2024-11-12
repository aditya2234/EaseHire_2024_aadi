import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'https://g50fee11f63aa4c-jkuqq5cm0d4x1svt.adb.ap-mumbai-1.oraclecloudapps.com/ords/rishabh_chowdhury1/users/validateuser/';

  constructor(private http: HttpClient) {}

  login(email_id: string, password: string): Observable<any> {
    const body = { email_id, password };
    console.log(body);
    // return this.http.post<any>(this.apiUrl, body).pipe(
    //   map(response => {
    //     if (response && response.email && response.role_id) {
    //       localStorage.setItem('currentUser', JSON.stringify(response));
    //       return response;
    //     } else {
    //       throw new Error('Invalid response format');
    //     }
    //   }),
    //   catchError(this.handleError)
    // );
    return this.http.post(this.apiUrl, body);
  }

  private handleError(error: HttpErrorResponse) {
    console.error('An error occurred:', error.message);
    return throwError('Something went wrong; please try again later.');
  }
}