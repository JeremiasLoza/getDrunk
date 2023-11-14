import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/get-drunk/interfaces/category.interface';
import { AuthLoginService } from 'src/app/get-drunk/services/auth.login.service';
import { DrinkService } from 'src/app/get-drunk/services/drink.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

export class NavBarComponent implements OnInit, OnDestroy{
  userLoginOn:boolean=false;
  categoryList: Category[] = [];
  

  constructor(private DrinkService: DrinkService, private router: Router, private loginService:AuthLoginService) {
    this.DrinkService.getCategories();
  }
  ngOnDestroy(): void {
    this.loginService.currentUserData.unsubscribe();
    this.loginService.currentUserLoginOn.unsubscribe();
  }

  searchCategory(cat: string) {
    this.router.navigate(['/category', cat]);
  }
  
  get categories() {
    return this.DrinkService.categoryList;
  }

  ngOnInit(): void {
    this.loginService.currentUserLoginOn.subscribe( // know if user is logged in via 
      {
        next:(userLoginOn) =>{
          this.userLoginOn=userLoginOn;
        }
      }
    )
  }
}

