import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { HomePageComponent } from './components/home-page/home-page.component';
import { DrinkListComponent } from './components/drink-list/drink-list.component';
import { DrinkCardComponent } from './components/drink-card/drink-card.component';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { DrinkPageComponent } from './components/drink-page/drink-page.component';
import { SearchDrinkComponent } from './components/search-drink/search-drink.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { IngredientsListComponent } from './components/ingredients-list/ingredients-list.component';

@NgModule({
  declarations: [
    HomePageComponent,
    DrinkListComponent,
    DrinkCardComponent,
    CarrouselComponent,
    DrinkPageComponent,
    SearchDrinkComponent,
    NotFoundComponent,
    IngredientsListComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [HomePageComponent],
})
export class GetDrunkModule { }
