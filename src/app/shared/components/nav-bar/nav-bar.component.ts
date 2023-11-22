import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Category } from 'src/app/get-drunk/interfaces/category.interface';
import { User } from 'src/app/get-drunk/interfaces/user.interface';
import { AuthLoginService } from 'src/app/get-drunk/services/auth.login.service';
import { DrinkService } from 'src/app/get-drunk/services/drink.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit, OnDestroy {
  categoryList: Category[] = [];
  //public isLogged: Observable<boolean> = of(false;
  public isLogged: boolean = false;

  constructor(
    private DrinkService: DrinkService,
    private router: Router,
    private loginService: AuthLoginService
  ) {
    this.DrinkService.getCategories();
  }
  ngOnDestroy(): void {}

  searchCategory(cat: string) {
    this.router.navigate(['/category', cat]);
  }

  get categories() {
    return this.DrinkService.categoryList;
  }

  ngOnInit(): void {
    this.loginService.isLoggedIn().subscribe((loggedIn) => {
      console.log(loggedIn);
      this.isLogged = loggedIn;
    });
  }

  randomDrink:any;
  
  getRandomDrink() {
    this.DrinkService.getRandomDrink()
      .subscribe((data: any) => {
        this.randomDrink = data.drinks[0];
        this.router.navigate(['/drink', this.randomDrink.idDrink]);
      }, (error) => {
        console.error('Hubo un error al obtener el trago aleatorio:', error);
      });
  }

}