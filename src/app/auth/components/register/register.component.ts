import { Component,OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router'
import { AuthLoginService } from 'src/app/get-drunk/services/auth.login.service';

@Component({
  selector: 'auth-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  userForm = this.formBuilder.group({
    name: ['',[Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
    lastName: ['',[Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
    email: ['',[Validators.required, Validators.email]],
    password: ['',[Validators.required]],
  });

  constructor(private formBuilder: FormBuilder, private loginService: AuthLoginService) { }

  ngOnInit() {
    
  }

  saveUser(){
    console.log(this.userForm.value);
    this.loginService.saveUserData(this.userForm.value);
  }

}
