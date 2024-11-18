import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email_id: ['', Validators.required],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { email_id, password } = this.loginForm.value;
      this.loginService.login(email_id, password).subscribe(
        data => {
          console.log(data);
          localStorage.setItem('role_id', JSON.stringify(data.ROLE_ID));
          localStorage.setItem('user_name', JSON.stringify(data.FIRST_NAME));
          this.router.navigate(['/home']);
        },
        error => {
          this.errorMessage = 'Invalid credentials. Please try again.';
          this.showErrorMessage(this.errorMessage);
        }
      );
    } else {
      this.errorMessage = 'Please fill out the form correctly.';
      this.showErrorMessage(this.errorMessage);
    }
  }

  showErrorMessage(message: string) {
    Swal.fire({
      icon: 'error',
      title: 'Login Failed',
      text: message,
      footer: '<a href="">Forgot your password?</a>'
    });
  }
}
