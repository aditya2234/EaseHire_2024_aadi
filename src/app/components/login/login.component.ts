import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router:Router
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
      this.loginService.login(email_id,password).subscribe((data) => {
        console.log(data);
        localStorage.setItem('role_id', JSON.stringify(data.ROLE_ID));
        localStorage.setItem('user_name', JSON.stringify(data.FIRST_NAME));
        this.router.navigate(['/home']);
        // window.location.reload();
      });
    }
  }
}
