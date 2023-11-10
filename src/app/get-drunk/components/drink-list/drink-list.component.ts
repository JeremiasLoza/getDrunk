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

  ngOnChanges(): void {
    this.DrinkService.searchDrink(this.strDrink);
  }
  
  get drinks() {
    return this.DrinkService.drinkList;
  }
}
