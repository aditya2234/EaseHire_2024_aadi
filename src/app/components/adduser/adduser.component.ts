import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdduserService } from '../../services/adduser.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrl: './adduser.component.css'
})
export class AdduserComponent {
  userForm: FormGroup;
  successMessage: string = '';

  constructor(private fb: FormBuilder, private userService: AdduserService) {
    this.userForm = this.fb.group({
      role_id: ['', Validators.required],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      psno: ['', Validators.required],
      doj: ['', Validators.required],
      grade: ['', Validators.required],
      email_id: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.userForm.valid) {
      this.userService.addUser(this.userForm.value).subscribe(response => {
        this.successMessage = 'User added successfully!';
        console.log(this.userForm.value);
      }, error => {
        console.error('Error adding user', error);
      });
    }
  }
}