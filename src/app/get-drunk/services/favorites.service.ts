import { Injectable } from '@angular/core';
import { AuthLoginService } from './auth.login.service';
import { Favorite } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  constructor( private loginService: AuthLoginService ) { }

  public addFavorite(id: string): void {

  }

  public removeFavorite(id: string): void {
    
  }

  public getFavorites(userId: string): string {
    return `${this.loginService.baseURL}/favorites?userId=${userId}`;
  }

}
