import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomePageComponent } from './components/home-page/home-page.component';
import { DrinkListComponent } from './components/drink-list/drink-list.component';
import { DrinkCardComponent } from './components/drink-card/drink-card.component';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { DrinkPageComponent } from './components/drink-page/drink-page.component';
import { SearchDrinkComponent } from './components/search-drink/search-drink.component';

@NgModule({
  declarations: [
    HomePageComponent,
    DrinkListComponent,
    DrinkCardComponent,
    CarrouselComponent,
    DrinkPageComponent,
    SearchDrinkComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [HomePageComponent],
})
export class GetDrunkModule { }
