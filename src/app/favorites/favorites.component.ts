import { Component } from '@angular/core';
import { FavoriteService } from '../service/favorite.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent {
  favoriteMeals: any[] = [];

  constructor(private favoriteService: FavoriteService) {
    this.favoriteMeals = this.favoriteService.getFavorites();
    console.log('Favorite meals:', this.favoriteMeals);
  }
}
