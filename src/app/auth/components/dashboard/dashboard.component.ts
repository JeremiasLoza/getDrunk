import { Component,OnDestroy,OnInit } from '@angular/core';
import { User } from 'src/app/get-drunk/interfaces/user.interface';
import { AuthLoginService } from 'src/app/get-drunk/services/auth.login.service';

@Component({
  selector: 'auth-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy{
  userLoginOn:boolean=false;
  userData?:User;
  constructor(private loginService: AuthLoginService){}

  ngOnDestroy(): void { 
    this.loginService.currentUserData.unsubscribe();
    this.loginService.currentUserLoginOn.unsubscribe();
  }

  ngOnInit(): void {
    this.loginService.currentUserLoginOn.subscribe({
      next:(userLoginOn) => {
        this.userLoginOn=this.userLoginOn;
      }
    });

    this.loginService.currentUserData.subscribe({
      next:(userData) => {
        this.userData=userData;
      }
    })
  }
}
