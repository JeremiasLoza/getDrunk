import { Component, Input } from '@angular/core';

import { Drink } from '../../interfaces/drink.interface';

@Component({
  selector: 'get-drunk-drink-card',
  templateUrl: './drink-card.component.html',
  styleUrls: ['./drink-card.component.css'],
})
export class DrinkCardComponent {
  @Input()
  public drink!: Drink;
}