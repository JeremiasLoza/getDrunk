import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FavoritesComponent } from './components/favorites/favorites.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    FavoritesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }