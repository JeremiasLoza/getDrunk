import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Drink, SearchResponse } from '../interfaces/drink.interface';

@Injectable({
  providedIn: 'root',
})
export class DrinkService {
  public drinkList: Drink[] = [];
  public drink: Drink[] = [];

  constructor(private http: HttpClient) { }

  private serviceUrl: string = 'https://www.thecocktaildb.com/api/json/v1/1/';

  searchDrink(tag: string): void {
    if (tag.length === 0) return;

    const params = new HttpParams().set('s', tag);

    this.http
      .get<SearchResponse>(`${this.serviceUrl}search.php`, { params })
      .subscribe((resp) => {
        this.drinkList = resp.drinks;
      });
  }

  searchDrinkById(id: string) {
    if (id.length === 0) return;

    const params = new HttpParams().set('i', id);

    this.http
      .get<SearchResponse>(`${this.serviceUrl}lookup.php`, { params })
      .subscribe((resp) => {
        this.drink = resp.drinks;
      });
  }
}
