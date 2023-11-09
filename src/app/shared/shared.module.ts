import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutPageComponent } from './components/about-page/about-page.component';



@NgModule({
  declarations: [
    SearchBarComponent,
    NavBarComponent,
    FooterComponent,
    AboutPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NavBarComponent,
    FooterComponent,
    AboutPageComponent
  ]
})
export class SharedModule { }
