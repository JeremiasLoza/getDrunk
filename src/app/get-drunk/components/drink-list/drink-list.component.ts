import { Component, Input } from '@angular/core';

import { DrinkService } from '../../services/drink.service';
import { Drink } from '../../interfaces/drink.interface';

@Component({
  selector: 'get-drunk-drink-list',
  templateUrl: './drink-list.component.html',
  styleUrls: ['./drink-list.component.css'],
})
export class DrinkListComponent {
  drinkList: Drink[] = [];

  constructor(private DrinkService: DrinkService) {
  }

  @Input()
  public strDrink!: string;

  @Input()
  public popular: boolean | null = false;

  ngOnChanges(): void {
    if (this.popular !== true) {
      this.DrinkService.searchDrink(this.strDrink);
    } else {
      this.DrinkService.getPopularDrinks();
    }
  }

  get drinks() {
    if (this.popular !== true) {
      return this.DrinkService.drinkList;
    } else {
      return this.DrinkService.popularDrinks;
    }
  }
}
