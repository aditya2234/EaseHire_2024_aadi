import { Component, OnInit } from '@angular/core';
import { Customer } from '../../models/customer';
import { CustomerService } from '../../services/customer.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-customers-view-all',
  templateUrl: './customers-view-all.component.html',
  styleUrls: ['./customers-view-all.component.css'],
})
export class CustomersViewAllComponent implements OnInit {
  addNewCustomerVisible: boolean = false;
  customerForm!: FormGroup;
  customers: Customer[] = [];
  filteredCustomers: Customer[] = [];
  searchTerm: string = '';
  editingCustomer: Customer | null = null;

  constructor(
    private fb: FormBuilder,
    private customerService: CustomerService
  ) {
    this.customerForm = this.fb.group({
      customername: [''],
    });
  }

  ngOnInit(): void {
    this.loadCustomers();
  }

  loadCustomers(): void {
    this.customerService.getCustomers().subscribe((data) => {
      this.customers = data;
      this.filteredCustomers = this.customers;
    });
  }

  filterCustomers(): void {
    if (this.searchTerm) {
      this.filteredCustomers = this.customers.filter((customer) =>
        customer.CUSTOMER_NAME.toLowerCase().includes(
          this.searchTerm.toLowerCase()
        )
      );
    } else {
      this.filteredCustomers = this.customers;
    }
  }

  deleteCustomer(id: number): void {
    this.customerService.deleteCustomer(id).subscribe(() => {
      this.loadCustomers();
    });
  }

  scrollDownToAddCustomer() {
    const addCustomer = document.getElementById('addCustomer');
    if (addCustomer) addCustomer.scrollIntoView({ behavior: 'smooth' });
  }

  editCustomer(customer: Customer) {
    this.editingCustomer = customer;
    this.customerForm.patchValue({
      customername: customer.CUSTOMER_NAME,
    });
    this.addNewCustomerVisible = true;
    setTimeout(() => this.scrollDownToAddCustomer(), 0);
  }

  addNewCustomer() {
    this.editingCustomer = null;
    this.customerForm.reset();
    this.addNewCustomerVisible = true;
    setTimeout(() => this.scrollDownToAddCustomer(), 0);  }

  submitAddNewCustomer() {
    if (this.editingCustomer) {
      // Update existing customer
      const updatedCustomer = {
        ...this.editingCustomer,
        id: this.editingCustomer.CUSTOMER_ID,
        customername: this.customerForm.value.customername,
      };
      this.customerService.updateCustomer(updatedCustomer).subscribe(() => {
        this.loadCustomers();
        this.addNewCustomerVisible = false;
      });
    } else {
      // Add new customer
      this.customerService
        .addCustomer(this.customerForm.value)
        .subscribe(() => {
          this.loadCustomers();
          this.addNewCustomerVisible = false;
        });
    }
  }
}
