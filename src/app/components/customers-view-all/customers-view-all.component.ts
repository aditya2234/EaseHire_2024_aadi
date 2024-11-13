import { Component, AfterViewInit } from '@angular/core';
import { Customer } from '../../models/customer';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-customers-view-all',
  templateUrl: './customers-view-all.component.html',
  styleUrl: './customers-view-all.component.css',
})
export class CustomersViewAllComponent implements AfterViewInit {
  customers: Customer[] = [];
  filteredCustomers: Customer[] = [];
  searchTerm: string = '';
  selectedCustomer: Customer | null = null;

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.loadCustomers();
  }

  ngAfterViewInit(): void {
    if (this.selectedCustomer) {
      this.scrollDownOnEditButtonClick();
    }
  }

  loadCustomers(): void {
    this.customerService.getCustomers().subscribe((data) => {
      this.customers = data.items;
      this.filteredCustomers = this.customers;
      console.log(this.customers);
    });
  }

  filterCustomers(): void {
    if (this.searchTerm) {
      this.filteredCustomers = this.customers.filter(customer =>
        customer.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        customer.contact.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        customer.email.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        customer.address.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        customer.industry.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredCustomers = this.customers;
    }
  }

  onSubmit() {
    if (this.selectedCustomer)
      this.customerService.updateCustomer(this.selectedCustomer.id, this.selectedCustomer).subscribe(data => {
        console.log('updated successfully', data);
      });
    this.selectedCustomer = null;
    this.loadCustomers();
    this.scrollUpOnCancelButtonClick();
  }

  editCustomer(customer: Customer): void {
    this.selectedCustomer = { ...customer };
    setTimeout(() => {
      this.scrollDownOnEditButtonClick();
    }, 0);
  }

  scrollDownOnEditButtonClick() {
    const editComponent = document.getElementById('editComponent');
    if (editComponent) editComponent.scrollIntoView({ behavior: 'smooth' });
  }

  scrollUpOnCancelButtonClick() {
    const viewComponent = document.getElementById('viewComponent');
    if (viewComponent) viewComponent.scrollIntoView({ behavior: 'smooth' });
  }

  deleteCustomer(id: number): void {
    this.customerService.deleteCustomer(id).subscribe((data: any) => {
      console.log('Data deleted', data);
      this.loadCustomers();
    });
  }

  cancelEdit() {
    this.selectedCustomer = null;
    this.scrollUpOnCancelButtonClick();
  }
}
