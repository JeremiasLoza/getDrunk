import { Component } from '@angular/core';
import { Category } from 'src/app/get-drunk/interfaces/category.interface';
import { DrinkService } from 'src/app/get-drunk/services/drink.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

export class NavBarComponent {
  categoryList: Category[] = [];

  constructor(private DrinkService: DrinkService) {
    this.DrinkService.getCategories();
  }
  
  get categories() {
    console.log(this.DrinkService.categoryList);
    return this.DrinkService.categoryList;
  }
}

