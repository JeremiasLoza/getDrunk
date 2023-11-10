import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DrinkService } from '../../services/drink.service';
import { Drink } from '../../interfaces/drink.interface';

@Component({
  selector: 'get-drunk-drink-page',
  templateUrl: './drink-page.component.html',
  styleUrls: ['./drink-page.component.css']
})
export class DrinkPageComponent {
  constructor ( private DrinkService: DrinkService, private route: ActivatedRoute ) {}

  ngOnInit(){
    let drinkId = this.route.snapshot.paramMap.get('id');
    this.DrinkService.searchDrinkById(drinkId!);
  }

  get drinks(){
    return this.DrinkService.drinkList;
  }
}
