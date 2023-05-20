// app-routing.module.ts

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';
import { MealsComponent } from './meals/meals.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { MealGeneratorComponent } from './meal-generator/meal-generator.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'meals/:category', component: MealsComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'meal-generator', component: MealGeneratorComponent },
  { path: '**', redirectTo: '' } // Redirect to home if route not found,
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
