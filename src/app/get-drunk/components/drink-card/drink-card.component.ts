import { Component } from '@angular/core';

import { DrinkService } from '../../services/drink.service';

@Component({
  selector: 'get-drunk-drink-card',
  templateUrl: './drink-card.component.html',
  styleUrls: ['./drink-card.component.css'],
})
export class DrinkCardComponent {
  constructor(private DrinkService: DrinkService) {
    this.DrinkService.searchDrink('Margarita');
  }

  get drinks() {
    return this.DrinkService.drinkList;
  }
}
