import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigurablePageService {
private api_url = "https://g50fee11f63aa4c-jkuqq5cm0d4x1svt.adb.ap-mumbai-1.oraclecloudapps.com/ords/rishabh_chowdhury1/roles/getroles"
  constructor(private httpClient:HttpClient) { }
  
  getRoles(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.api_url)
  }
}
