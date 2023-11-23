import { Component, OnInit } from '@angular/core';
import { Drink } from 'src/app/get-drunk/interfaces/drink.interface';
import { DrinkService } from '../../../get-drunk/services/drink.service';
import { FavoritesService } from '../../../get-drunk/services/favorites.service';
import { Favorite } from 'src/app/get-drunk/interfaces/user.interface';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'auth-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  public token: string | null = localStorage.getItem('token');
  favorites: Favorite[] = [];
  drinks: Drink[] = [];

  constructor ( private drinkService: DrinkService, private favoriteService: FavoritesService ) {}
  
  ngOnInit(): void {
    this.favoriteService.getFavorites(this.token!).subscribe(
      (data: Favorite[]) => {
        this.favorites = data;
        console.log('Tragos favoritos:', this.favorites[0].favorites);
    
        const requests = this.favorites[0].favorites.map(e =>
          this.drinkService.searchDrinkByIdObs(e)
        );
    
        forkJoin(requests).subscribe(drinksArray => {
          this.drinks = drinksArray.flat();
          console.log(this.drinks);
        });
      },
      (error) => {
        console.error('Error al obtener tragos favoritos:', error);
      }
    );
  }
}
