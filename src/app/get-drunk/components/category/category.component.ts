import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DrinkService } from '../../services/drink.service';
import { Drink } from '../../interfaces/drink.interface';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'get-drunk-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  public categoryName: string = '';
  public drinks: Drink[] = [];
  public ids: string[] = [];

  constructor(private drinkService: DrinkService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.categoryName = params['name'];

      this.refreshList();
    });
  }

  refreshList() {
    this.ids = [];
    this.drinkService.getDrinkCategories(this.categoryName).subscribe((data) => {
      for (let i = 0; i < (data.drinks.length); i++) {
        this.ids.push(data.drinks[i].idDrink);
      }

      const requests = this.ids.map(e =>
        this.drinkService.searchDrinkByIdObs(e)
      );

      forkJoin(requests).subscribe(drinksArray => {
        this.drinks = drinksArray.flat();
      });

    });
  }
}
