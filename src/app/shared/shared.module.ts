import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { RouterModule } from '@angular/router';
import { LazyImageComponent } from './components/lazy-image/lazy-image.component';
import { DrinkCardComponent } from '../get-drunk/components/drink-card/drink-card.component';
import { GetDrunkModule } from '../get-drunk/get-drunk.module';


@NgModule({
  declarations: [
    SearchBarComponent,
    NavBarComponent,
    FooterComponent,
    AboutPageComponent,
    LazyImageComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    NavBarComponent,
    FooterComponent,
    AboutPageComponent,
    LazyImageComponent
  ]
})
export class SharedModule { }
