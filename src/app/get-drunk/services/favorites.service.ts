import { Injectable } from '@angular/core';
import { AuthLoginService } from './auth.login.service';
import { Favorite } from '../interfaces/user.interface';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, switchMap, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  private jsonApiURL: string = 'http://localhost:3000/favorites';

  constructor(
    private loginService: AuthLoginService,
    private http: HttpClient
  ) {}

  getFavorites(userId: string): Observable<Favorite[]> {
    return this.http.get<Favorite[]>(`${this.jsonApiURL}?id=${userId}`);
  }

  addFavorite(id: string, favorite: string): Observable<any> {
    return this.getFavorites(id).pipe(
      switchMap((userFavorites) => {
        if (!userFavorites[0]) {
          // Si el usuario no tiene favoritos, crea un nuevo objeto Favorite
          const newUserFavorites: Favorite = { id, favorites: [favorite] };

          // Guarda el nuevo objeto en el JSON utilizando una solicitud POST
          return this.http
            .post<Favorite>(`${this.jsonApiURL}`, newUserFavorites)
            .pipe(
              catchError((error) => {
                // Manejar errores al crear nuevos favoritos
                console.error('Error al crear nuevos favoritos:', error);
                return throwError(error);
              })
            );
        } else {
          // Si el usuario ya tiene favoritos, actualiza la lista de favoritos
          if (!userFavorites[0].favorites.includes(favorite)) {
            userFavorites[0].favorites.push(favorite);
          }

          // Guarda la lista actualizada en el JSON utilizando una solicitud PUT
          return this.http
            .put<Favorite>(`${this.jsonApiURL}/${id}`, userFavorites[0])
            .pipe(
              catchError((error) => {
                // Manejar errores al actualizar favoritos existentes
                console.error(
                  'Error al actualizar favoritos existentes:',
                  error
                );
                return throwError(error);
              })
            );
        }
      })
    );
  }

  removeFavorite(id: string, favorite: string): Observable<any> {
    return this.getFavorites(id).pipe(
      switchMap((userFavorites) => {
        userFavorites[0].favorites = userFavorites[0].favorites.filter(
          (item) => item !== favorite
        );

        // Guarda la lista actualizada en el JSON utilizando una solicitud PUT
        return this.http
          .put<Favorite>(`${this.jsonApiURL}/${id}`, userFavorites[0])
          .pipe(
            catchError((error) => {
              // Manejar errores al actualizar favoritos existentes
              console.error('Error al actualizar favoritos existentes:', error);
              return throwError(error);
            })
          );
      })
    );
  }

  public isFavorite(id: string, favorite: string): Observable<boolean> {
    return this.getFavorites(id).pipe(
      map((userFavorites) => {
        // Verifica si el favorito está presente en la lista de favoritos del usuario
        return userFavorites[0]?.favorites.includes(favorite) || false;
      }),
      catchError((error) => {
        // Manejar errores al obtener la lista de favoritos
        console.error('Error al obtener la lista de favoritos:', error);
        return throwError(error);
      })
    );
  }
  
}
