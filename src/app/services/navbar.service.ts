import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavbarService {
  constructor(private httpClient:HttpClient) {}
  navbar_options = "https://g50fee11f63aa4c-jkuqq5cm0d4x1svt.adb.ap-mumbai-1.oraclecloudapps.com/ords/rishabh_chowdhury1/users/getnavaccess"

  getNavLinksById(roleId:number):Observable<any>{
    return this.httpClient.get<any[]>(this.navbar_options+"/"+roleId)
    //http req mein role id jayega
    
  }


}
