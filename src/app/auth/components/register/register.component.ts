import { Component,OnInit } from '@angular/core';
import { FormBuilder, Validators, AbstractControl, ValidationErrors, ValidatorFn, FormGroup } from '@angular/forms';
import { Router, RouterModule } from '@angular/router'
import { AuthLoginService } from 'src/app/get-drunk/services/auth.login.service';

@Component({
  selector: 'auth-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  constructor(private formBuilder: FormBuilder, private loginService: AuthLoginService, private router: Router) { }

  strongPasswordRegx: RegExp =/^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d).{8,}$/;

  userForm = this.formBuilder.group({
    name: ['',[Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
    lastName: ['',[Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
    email: ['',[Validators.required, Validators.email]],
    password: ['',[Validators.required,Validators.pattern(this.strongPasswordRegx)]],
    confirmPassword: ['', [Validators.required]]
  }, {
    validator: this.confirmPasswordValidator // Agrega el validador personalizado al FormGroup
  });

  confirmPasswordValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    if (password?.value !== confirmPassword?.value) {
      confirmPassword?.setErrors({ passwordMismatch: true });
    return { passwordMismatch: true };
    }else{
      
      
    return null;
  }
  
   
  }

 

  ngOnInit(): void {
  }

  get email(){
    return this.userForm.controls['email'];
  }

  get password(){
    return this.userForm.controls['password'];
  }

  get confirmPassword(){
    return this.userForm.controls['confirmPassword'];
  }

  get name(){
    return this.userForm.controls['name'];
  }

  get lastName(){
    return this.userForm.controls['lastName'];
  }

  validateForm(){
    if(this.userForm.valid){
      this.loginService.saveUserData(this.userForm.value).subscribe(
        response => {
          console.log('Server response:', response);
          this.router.navigate(['/login']); //once the user has an account its redirected to the log in page
        },
        error => {
          console.error('Error when sending data:', error);
        }
      );
  }else{
      this.userForm.markAllAsTouched();
    }
  }

}
