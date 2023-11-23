import { Component } from '@angular/core';
import { DrinkService } from '../../services/drink.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'get-drunk-search-drink',
  templateUrl: './search-drink.component.html',
  styleUrls: ['./search-drink.component.css']
})
export class SearchDrinkComponent {
  constructor(private DrinkService: DrinkService, private route: ActivatedRoute) { }

  public searchText: string = '';

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.searchText = params['name'];
    });
  }

  get drinks() {
    return this.DrinkService.drinkList;
  }
}
