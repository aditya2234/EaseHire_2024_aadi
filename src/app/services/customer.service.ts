import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Customer } from '../models/customer';
import urls from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  apiUrl = urls.customerApi;

  private customers: Customer[] = [
    {
      id: 1,
      name: 'Client A',
      contact: '1234567890',
      email: 'clienta@example.com',
      address: '123 Street, City',
      numberOfEmployees: 100,
      projectsOngoing: [1, 2],
      ageOfClient: 5,
      industry: 'Finance',
      revenue: 5000000,
      notes: 'Important client',
    },
    {
      id: 2,
      name: 'Client B',
      contact: '0987654321',
      email: 'clientb@example.com',
      address: '456 Avenue, City',
      numberOfEmployees: 50,
      projectsOngoing: [3],
      ageOfClient: 3,
      industry: 'Healthcare',
      revenue: 2000000,
      notes: 'Potential for growth',
    },
  ];

  constructor(private https: HttpClient) {}

  getCustomers(): Observable<any> {

    return this.https.get(this.apiUrl);
  }

  addCustomer(customer: Customer): Observable<Customer> {
    console.log('service mein aaya')
    return this.https.post<Customer>(this.apiUrl, customer);
    
  }

  updateCustomer(customer: Customer): Observable<Customer> {
    const index = this.customers.findIndex((c) => c.id === customer.id);
    if (index !== -1) {
      this.customers[index] = customer;
    }
    return of(customer);
  }

  deleteCustomer(id: number): Observable<number> {
    this.customers = this.customers.filter((c) => c.id !== id);
    return of(id);
  }
}
