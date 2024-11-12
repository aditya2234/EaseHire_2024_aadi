import { Component } from '@angular/core';
import { Customer } from '../../models/customer';
import { CustomerService } from '../../services/customer.service';


@Component({
  selector: 'app-customers-view-all',
  templateUrl: './customers-view-all.component.html',
  styleUrl: './customers-view-all.component.css'
})
export class CustomersViewAllComponent {
  customers: Customer[] = [];
  
  constructor(private customerService: CustomerService) { }
  
  ngOnInit(): void {
    this.loadCustomers();
  }
  selectedCustomer: Customer | null = null;
  
  loadCustomers(): void {
    this.customerService.getCustomers().subscribe(data => {
      this.customers=data.items;
      console.log(this.customers)  

    }
    );
    
  }


  onSubmit() {
    if(this.selectedCustomer)
    this.customerService.updateCustomer(this.selectedCustomer)
  this.selectedCustomer=null; 
  }

  editCustomer(customer: Customer): void {
    this.selectedCustomer = { ...customer };
  }

  

  deleteCustomer(id: number): void {
    this.customerService.deleteCustomer(id);
  }
}
