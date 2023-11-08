import { Component } from '@angular/core';

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
    this.DrinkService.searchDrink('Margarita');
  }

  get drinks() {
    return this.DrinkService.drinkList;
  }
}
