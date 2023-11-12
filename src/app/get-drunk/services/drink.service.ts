import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Drink, SearchResponse } from '../interfaces/drink.interface';
import { Category, CategoryResponse } from '../interfaces/category.interface';

@Injectable({
  providedIn: 'root',
})
export class DrinkService {
  public drinkList: Drink[] = [];
  public drink: Drink[] = [];
  public categoryList: Category[] = [];
  public popularDrinks: Drink[] = [];

  constructor(private http: HttpClient) { }

  private serviceUrl: string = 'https://www.thecocktaildb.com/api/json/v2/9973533/';

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

  getCategories(): void {
    const params = new HttpParams().set('c', 'list');

    this.http
      .get<CategoryResponse>(`${this.serviceUrl}list.php`, { params })
      .subscribe((resp) => {
        this.categoryList = resp.drinks;
      });
  }

  getPopularDrinks(): void {
    this.http
      .get<SearchResponse>(`${this.serviceUrl}popular.php`)
      .subscribe((resp) => {
        this.popularDrinks = resp.drinks;
      });
  }
}
