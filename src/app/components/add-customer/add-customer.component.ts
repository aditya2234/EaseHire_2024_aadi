import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../../services/customer.service'; 
import { Customer } from '../../models/customer';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  customerForm: FormGroup;

  constructor(private fb: FormBuilder, private customerService: CustomerService) {
    this.customerForm = this.fb.group({
      name: ['', Validators.required],
      contact: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      numberOfEmployees: [0, [Validators.required, Validators.min(1)]],
      // projectsOngoing: ['', Validators.required],
      ageOfClient: [0, [Validators.required, Validators.min(0)]],
      industry: ['', Validators.required],
      revenue: [0, [Validators.required, Validators.min(0)]],
      notes: ['']
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.customerForm.valid) {
      const formValue = this.customerForm.value;
      const newCustomer: Customer = {
        ...formValue,
        // projectsOngoing: formValue.projectsOngoing.split(',').map((id: string) => parseInt(id.trim(), 10)) // Convert input to array of numbers
      };
      this.customerService.addCustomer(newCustomer).subscribe(customer => {
        console.log('Customer added:', customer);
        this.customerForm.reset();
      });
      console.log(newCustomer);
    }
  }
}
