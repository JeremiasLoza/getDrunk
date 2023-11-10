import { Component } from '@angular/core';
import { DrinkService } from '../../services/drink.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'get-drunk-search-drink',
  templateUrl: './search-drink.component.html',
  styleUrls: ['./search-drink.component.css']
})
export class SearchDrinkComponent {
  constructor ( private DrinkService: DrinkService, private route: ActivatedRoute ) {}

  public searchText: string = '';

  ngOnInit(): void {
    // Suscribirse a cambios en los parámetros de la ruta
    this.route.params.subscribe(params => {
      // Actualizar el valor de searchText cuando cambian los parámetros
      this.searchText = params['name'];
    });
  }

  get drinks(){
    return this.DrinkService.drinkList;
  }
}
