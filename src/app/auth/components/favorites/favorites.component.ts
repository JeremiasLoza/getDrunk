import { Component } from '@angular/core';
import { Drink } from 'src/app/get-drunk/interfaces/drink.interface';

@Component({
  selector: 'auth-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent {
  favoriteList: Drink[] = [];

  

}
