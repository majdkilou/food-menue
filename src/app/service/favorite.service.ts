import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  private favoriteMealsKey = 'favoriteMeals';
  favoriteMeals: any[] = [];

  constructor() {
    this.loadFavorites();
    this.saveFavorites();
  }

  private loadFavorites() {
    const storedFavorites = localStorage.getItem(this.favoriteMealsKey);
    if (storedFavorites) {
      this.favoriteMeals = JSON.parse(storedFavorites);
    }
  }

  private saveFavorites() {
    localStorage.setItem(this.favoriteMealsKey, JSON.stringify(this.favoriteMeals));
  }

  addFavorite(meal: any) {
    this.favoriteMeals.push(meal);
    this.saveFavorites();
  }

  removeFavorite(meal: any) {
    const index = this.favoriteMeals.findIndex((favoriteMeal) => favoriteMeal.id === meal.id);
    if (index !== -1) {
      this.favoriteMeals.splice(index, 1);
      this.saveFavorites();
    }
  }

  getFavorites() {
    return this.favoriteMeals;
  }
}
