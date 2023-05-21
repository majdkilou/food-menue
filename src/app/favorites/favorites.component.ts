import { Component } from '@angular/core';
import { FavoriteService } from '../service/favorite.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent {
  favoriteMeals: any[] = [];

  constructor(private favoriteService: FavoriteService ,) {
    this.favoriteMeals = this.favoriteService.getFavorites();
    console.log('Favorite meals:', this.favoriteMeals);
  }

  removeMealFromFavorites(meal: any) {
    // Call the removeFavorite() method of the FavoriteService
    this.favoriteService.removeFavorite(meal);
    // Update the favoriteMeals array
    this.favoriteMeals = this.favoriteService.getFavorites();
  }
}
