import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutPageComponent } from './shared/components/about-page/about-page.component';
import { HomePageComponent } from './get-drunk/components/home-page/home-page.component';
import { DrinkPageComponent } from './get-drunk/components/drink-page/drink-page.component';
import { DrinkListComponent } from './get-drunk/components/drink-list/drink-list.component';
import { SearchDrinkComponent } from './get-drunk/components/search-drink/search-drink.component';
import { FavoritesComponent } from './auth/components/favorites/favorites.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'drink/:id', component: DrinkPageComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'search/:name', component: SearchDrinkComponent }, // TODO: Armar el componente con la busqueda
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
