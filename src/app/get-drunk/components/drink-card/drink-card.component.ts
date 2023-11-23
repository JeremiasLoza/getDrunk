import { Component, Input } from '@angular/core';

import { Drink } from '../../interfaces/drink.interface';
import { FavoritesService } from '../../services/favorites.service';
import { AuthLoginService } from '../../services/auth.login.service';

@Component({
  selector: 'get-drunk-drink-card',
  templateUrl: './drink-card.component.html',
  styleUrls: ['./drink-card.component.css'],
})
export class DrinkCardComponent {
  public isLogged: boolean = false;
  public token: string | null = localStorage.getItem('token');

  constructor ( private favorites:FavoritesService, private loginService: AuthLoginService ) {}

  @Input()
  public drink!: Drink;

  public async addFavorite(drinkId: string){
    let observable = await this.favorites.addFavorite(this.token!, drinkId);

    observable.subscribe({
      next: (resp) => console.log(resp),
      error: (error) => console.log(error)
    })
  }
  
  ngOnInit(): void {
    this.loginService.isLoggedIn().subscribe((loggedIn) => {
      console.log(loggedIn);
      this.isLogged = loggedIn;
    });
  }

}