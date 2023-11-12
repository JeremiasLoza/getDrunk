import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/get-drunk/interfaces/category.interface';
import { DrinkService } from 'src/app/get-drunk/services/drink.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

export class NavBarComponent {
  categoryList: Category[] = [];

  constructor(private DrinkService: DrinkService, private router: Router) {
    this.DrinkService.getCategories();
  }

  searchCategory(cat: string) {
    this.router.navigate(['/category', cat]);
  }
  
  get categories() {
    return this.DrinkService.categoryList;
  }
}

