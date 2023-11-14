import { Component, Input } from '@angular/core';

import { DrinkService } from '../../services/drink.service';
import { Drink } from '../../interfaces/drink.interface';

@Component({
  selector: 'get-drunk-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css'],
})
export class CarrouselComponent {

  constructor(private DrinkService: DrinkService) {
  }

  get drinks() {
    return this.DrinkService.drinkList;
  }
}
