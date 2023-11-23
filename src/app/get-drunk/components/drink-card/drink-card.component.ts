import { Component, Input, OnDestroy, OnInit } from '@angular/core';

import { Drink } from '../../interfaces/drink.interface';
import { FavoritesService } from '../../services/favorites.service';
import { AuthLoginService } from '../../services/auth.login.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'get-drunk-drink-card',
  templateUrl: './drink-card.component.html',
  styleUrls: ['./drink-card.component.css'],
})
export class DrinkCardComponent implements OnInit, OnDestroy {
  public isLogged: boolean = false;
  public token: string | null = localStorage.getItem('token');
  isFavorite = false;
  private isFavoriteSubscription: Subscription | undefined;

  constructor ( private favoriteService:FavoritesService, private loginService: AuthLoginService ) {}

  @Input()
  public drink!: Drink;

  toggleFavorite(drinkId: string): void {
    this.favoriteService.isFavorite(this.token!, drinkId).subscribe((isFav) => {
      if (isFav) {
        this.favoriteService.removeFavorite(this.token!, drinkId).subscribe(() => {
          console.log('Removed from favorites.');
          this.isFavorite = false;
        });
      } else {
        this.favoriteService.addFavorite(this.token!, drinkId).subscribe(() => {
          console.log('Added to favorites.');
          this.isFavorite = true;
        });
      }
    });
  }
  
  ngOnInit(): void {
    this.loginService.isLoggedIn().subscribe((loggedIn) => {
      this.isLogged = loggedIn;
    });

    this.isFavoriteSubscription = this.favoriteService
      .isFavorite(this.token!, this.drink.idDrink)
      .subscribe((result) => {
        this.isFavorite = result;
      });
  }

  ngOnDestroy(): void {
    // Asegúrate de desuscribirte para evitar posibles fugas de memoria
    if (this.isFavoriteSubscription) {
      this.isFavoriteSubscription.unsubscribe();
    }
  }

}