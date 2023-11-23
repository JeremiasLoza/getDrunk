import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { SharedModule } from '../shared/shared.module';

import {NgxPaginationModule} from 'ngx-pagination';

import { HomePageComponent } from './components/home-page/home-page.component';
import { DrinkListComponent } from './components/drink-list/drink-list.component';
import { DrinkCardComponent } from './components/drink-card/drink-card.component';
import { DrinkPageComponent } from './components/drink-page/drink-page.component';
import { SearchDrinkComponent } from './components/search-drink/search-drink.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { IngredientsListComponent } from './components/ingredients-list/ingredients-list.component';
import { IngredientCardComponent } from './components/ingredient-card/ingredient-card.component';

@NgModule({
  declarations: [
    HomePageComponent,
    DrinkListComponent,
    DrinkCardComponent,
    DrinkPageComponent,
    SearchDrinkComponent,
    NotFoundComponent,
    IngredientsListComponent,
    IngredientCardComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    NgxPaginationModule
  ],
  exports: [HomePageComponent,DrinkCardComponent],
})
export class GetDrunkModule { }
