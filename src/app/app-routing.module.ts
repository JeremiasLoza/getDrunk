import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutPageComponent } from './shared/components/about-page/about-page.component';
import { HomePageComponent } from './get-drunk/components/home-page/home-page.component';
import { DrinkPageComponent } from './get-drunk/components/drink-page/drink-page.component';
import { DrinkListComponent } from './get-drunk/components/drink-list/drink-list.component';
import { SearchDrinkComponent } from './get-drunk/components/search-drink/search-drink.component';
import { FavoritesComponent } from './auth/components/favorites/favorites.component';
import { NotFoundComponent } from './get-drunk/components/not-found/not-found.component';
import { LoginComponent } from './auth/components/login/login.component';
import { DashboardComponent } from './auth/components/dashboard/dashboard.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'drink/:id', component: DrinkPageComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'search/:name', component: SearchDrinkComponent },
  { path: 'category/:name', component: SearchDrinkComponent }, // TODO: Armar el componente con la busqueda
  { path: 'login', component: LoginComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
