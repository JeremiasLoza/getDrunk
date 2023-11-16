import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthLoginService } from 'src/app/get-drunk/services/auth.login.service';

@Component({
  selector: 'auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginError: string = '';
  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });
  public isLogged: Promise<boolean>;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: AuthLoginService
  ) {
    this.isLogged = new Promise((resolve) => {
      resolve(false);
    });
  }

  ngOnInit() {}

  get email() {
    return this.loginForm.controls.email;
  }

  get password() {
    return this.loginForm.controls.password;
  }

  login() {
    if (this.loginForm.valid) {
      this.isLogged = this.loginService.checkAuth(this.loginForm.value.email!, this.loginForm.value.password!);
      this.isLogged.then((loggedIn) => {
        if (loggedIn) {
          this.router.navigate(['/home']);
        }
      }).catch((error) => {
        console.log(error);
      });
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

  redirectToRegister() {
    this.router.navigate(['/register']);
  }
}
