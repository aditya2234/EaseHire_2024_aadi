import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Customer } from '../models/customer';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {

   projects ={
    projectArray:
    [
      { "id": 1, "name": "Project Alpha" },
      { "id": 2, "name": "Project Beta" },
      { "id": 3, "name": "Project Gamma" },
      { "id": 4, "name": "Project Delta" },
      { "id": 5, "name": "Project Epsilon" }
    ]
   }
  

  apiUrl =
    'https://g50fee11f63aa4c-jkuqq5cm0d4x1svt.adb.ap-mumbai-1.oraclecloudapps.com/ords/rishabh_chowdhury1/customer-side/customer_table/';


  constructor(private https: HttpClient) {}

  getCustomers(): Observable<any> {
    const data: any =  this.https.get(this.apiUrl)
    return data;
  }

  addCustomer(customer: Customer): Observable<Customer> {
    return this.https.post<Customer>(this.apiUrl, customer);
  }

  updateCustomer(customer: Customer): Observable<any> {
    return this.https.put(this.apiUrl, customer);
  }

  deleteCustomer(id: number): any {
    return this.https.delete(
      'https://g50fee11f63aa4c-jkuqq5cm0d4x1svt.adb.ap-mumbai-1.oraclecloudapps.com/ords/rishabh_chowdhury1/customer/' +
        id
    );
  }


  getProjectsByCustomer(customer_id:number){
    return this.projects;
  }
}
