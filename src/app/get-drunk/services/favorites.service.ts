import { Injectable } from '@angular/core';
import { AuthLoginService } from './auth.login.service';
import { Favorite } from '../interfaces/user.interface';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, switchMap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private jsonApiURL: string = 'http://localhost:3000/favorites';

  constructor(private loginService: AuthLoginService, private http: HttpClient) { }

  getFavorites(userId: string): Observable<Favorite[]> {
    return this.http.get<Favorite[]>(`${this.jsonApiURL}?userId=${userId}`);
  }

  addFavorite(id: string, favorite: string): Observable<any> {
    return this.getFavorites(id).pipe(
      switchMap((userFavorites) => {
        if (userFavorites[0].id != id) {
          // Si el usuario no tiene favoritos, crea un nuevo objeto Favorite
          const newUserFavorites: Favorite = { id, favorites: [favorite] };
  
          // Guarda el nuevo objeto en el JSON utilizando una solicitud POST
          return this.http.post<Favorite>(`${this.jsonApiURL}`, newUserFavorites).pipe(
            catchError(error => {
              // Manejar errores al crear nuevos favoritos
              console.error('Error al crear nuevos favoritos:', error);
              return throwError(error);
            })
          );
        } else {
          // Si el usuario ya tiene favoritos, actualiza la lista de favoritos
          userFavorites[0].favorites.push(favorite);
          console.log(userFavorites[0]);
          console.log(`${this.jsonApiURL}/${id}`, userFavorites[0]);
  
          // Guarda la lista actualizada en el JSON utilizando una solicitud PUT
          return this.http.put<Favorite>(`${this.jsonApiURL}/${id}`, userFavorites[0]).pipe(
            catchError(error => {
              // Manejar errores al actualizar favoritos existentes
              console.error('Error al actualizar favoritos existentes:', error);
              return throwError(error);
            })
          );
        }
      })
    );
  }

  // addFavorite(userId: string, favorite: string): Observable<any> {
  //   return this.getFavorites(userId).pipe(
  //     map((userFavorites) => {
  //       if (userFavorites.length == 0) {
  //         userFavorites[0] = { userId, favorites: [] };
  //       }

  //       console.log(userFavorites);

  //       // Agrega el nuevo favorito al arreglo
  //       userFavorites[0].favorites.push(favorite);

  //       // Actualiza los favoritos en la base de datos
  //       return this.http.post<Favorite>(`${this.jsonApiURL}/${userFavorites[0].userId}`, userFavorites);
  //     })
  //   );
  // }

  // removeFavorite(userId: string, favorite: string): Observable<any> {
  //   return this.getFavorites(userId).pipe(
  //     map((userFavorites) => {
  //       if (userFavorites) {
  //         // Filtra el favorito a remover del arreglo
  //         userFavorites.favorites = userFavorites.favorites.filter((item) => item !== favorite);

  //         // Actualiza los favoritos en la base de datos
  //         return this.http.put<Favorite>(`${this.jsonApiURL}/${userFavorites.userId}`, userFavorites);
  //       } else {
  //         // Manejar el caso donde el usuario no tiene favoritos
  //         return null;
  //       }
  //     })
  //   );
  // }

}
