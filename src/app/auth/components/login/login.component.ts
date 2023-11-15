import { Component,OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router'
import { LoginRequest } from 'src/app/get-drunk/interfaces/loginRequest.interface';
import { AuthLoginService } from 'src/app/get-drunk/services/auth.login.service';


@Component({
  selector: 'auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginError:string="";
  loginForm=this.formBuilder.group({
    email:['', [Validators.required,Validators.email]],
    password:['',[Validators.required]],
  })

  constructor(private formBuilder:FormBuilder, private router:Router, private loginService:AuthLoginService){}

  ngOnInit(){

  }

  get email(){
    return this.loginForm.controls.email;
  }

  get password(){
    return this.loginForm.controls.password;
  }


  login(){
    if(this.loginForm.valid){
      this.loginService.login(this.loginForm.value as LoginRequest).subscribe({
        next: (userData) => {
          console.log(userData);
          this.loginService.checkAuth(userData.email)
        },
        error: (err) => {
          console.error(err);
          this.loginError=err;
        },
        complete:() => {
          console.info('Completed login');
          this.router.navigateByUrl('/dashboard');
          this.loginForm.reset();
        }
      });
      
    }
    else{
      this.loginForm.markAllAsTouched();
    }
  }

  redirectToRegister(){
    this.router.navigate(['/register']);
  }


}
