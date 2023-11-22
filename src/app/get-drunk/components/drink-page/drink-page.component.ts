import { Component } from '@angular/core';
import { ActivatedRoute, Router, Route } from '@angular/router';
import { DrinkService } from '../../services/drink.service';
import { Drink } from '../../interfaces/drink.interface';

@Component({
  selector: 'get-drunk-drink-page',
  templateUrl: './drink-page.component.html',
  styleUrls: ['./drink-page.component.css']
})
export class DrinkPageComponent {
  constructor(private DrinkService: DrinkService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      let drinkId = params.get('id');
      if (drinkId && !isNaN(Number(drinkId))) {
        this.DrinkService.searchDrinkById(drinkId);
      } else {
        this.router.navigateByUrl('/not-found');
      }
    });

    /*
    let drinkId = this.route.snapshot.paramMap.get('id');
    if (drinkId && !isNaN(Number(drinkId))) {
    this.DrinkService.searchDrinkById(drinkId!);
    }
    else
    {
      this.router.navigateByUrl('/not-found');
    }
*/
  }

  get drinks() {
    return this.DrinkService.drink;
  }
}
