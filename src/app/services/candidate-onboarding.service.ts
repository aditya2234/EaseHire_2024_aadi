import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { find, Observable } from 'rxjs';
import { Candidate } from '../models/candidate';

@Injectable({
  providedIn: 'root'
})
export class CandidateOnboardingService {

  // api's
  public postUrl="https://g50fee11f63aa4c-jkuqq5cm0d4x1svt.adb.ap-mumbai-1.oraclecloudapps.com/ords/rishabh_chowdhury1/candidate/postcandidate/";
  public getUrl="https://g50fee11f63aa4c-jkuqq5cm0d4x1svt.adb.ap-mumbai-1.oraclecloudapps.com/ords/rishabh_chowdhury1/candidate/postcandidate/";
  public updateUrl="https://g50fee11f63aa4c-jkuqq5cm0d4x1svt.adb.ap-mumbai-1.oraclecloudapps.com/ords/rishabh_chowdhury1/candidate/updatecandidate/";
  public deleteUrl="https://g50fee11f63aa4c-jkuqq5cm0d4x1svt.adb.ap-mumbai-1.oraclecloudapps.com/ords/rishabh_chowdhury1/candidate/deletecandidate/";


  constructor(private http:HttpClient) { }

  public getAllCandidates():Observable<any>{
    return this.http.get<any>(this.getUrl);
  }

  public addCandidate(candidate:Candidate):Observable<any>{
    console.log("console",candidate);
    return this.http.post<any>(this.postUrl,candidate);
  }

  public deleteCandidate(id:number):Observable<void>{
    return this.http.delete<void>(this.deleteUrl+id);
  }
  
  public editCandidateById(id: number, candidate: Candidate): Observable<any> {
    console.log("servicaaaaaaaae",id,candidate);
    console.log("service",candidate);
    return this.http.put(this.updateUrl + id, candidate);
  }

}
