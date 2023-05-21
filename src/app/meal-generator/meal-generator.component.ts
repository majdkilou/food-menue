import { Component } from '@angular/core';
import { MealApiService } from '../service/meal-api.service';
import { FavoriteService } from '../service/favorite.service';


@Component({
  selector: 'app-meal-generator',
  templateUrl: './meal-generator.component.html',
  styleUrls: ['./meal-generator.component.css']
})
export class MealGeneratorComponent {
  randomMeal: any;

  constructor(private mealApiService: MealApiService ,  private favoriteService: FavoriteService ) {
    this.generateRandomMeal();
  }

  generateRandomMeal() {
    this.mealApiService.lookupRandomMeal().subscribe((response) => {
      this.randomMeal = response.meals[0];
      console.log('Random meal:', this.randomMeal);
    });
  }

  generateNewRandomMeal() {
    this.generateRandomMeal();
  }
  saveToFavorite() {
    this.favoriteService.addFavorite(this.randomMeal);
    console.log('Meal saved to favorites:', this.randomMeal);
  }
}
