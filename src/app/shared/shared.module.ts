import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';



@NgModule({
  declarations: [
    SearchBarComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
