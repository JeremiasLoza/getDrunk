import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageComponent } from './components/home-page/home-page.component';
import { DrinkListComponent } from './components/drink-list/drink-list.component';
import { DrinkCardComponent } from './components/drink-card/drink-card.component';
import { CarrouselComponent } from './components/carrousel/carrousel.component';

@NgModule({
  declarations: [
    HomePageComponent,
    DrinkListComponent,
    DrinkCardComponent,
    CarrouselComponent,
  ],
  imports: [CommonModule],
  exports: [HomePageComponent],
})
export class GetDrunkModule {}
