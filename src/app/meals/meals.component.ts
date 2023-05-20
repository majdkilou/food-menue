import { Component, Input, OnInit } from '@angular/core';
import { MealApiService } from '../service/meal-api.service';
import { FavoriteService } from '../service/favorite.service';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css']
})
export class MealsComponent implements OnInit{
  @Input() selectedCategory?: string;
  meals: any[] = [];  
  value?: number;
  favoriteMeals: any[] = [];

  constructor(private mealApiService: MealApiService , private favoriteService: FavoriteService) {
console.log(this.selectedCategory);
   }

   ngOnInit() {
    if (this.selectedCategory) {
      this.mealApiService.filterByCategory(this.selectedCategory).subscribe(
        (response) => {
          this.meals = response.meals;
          console.log('Meals:', this.meals);
        },
        (error) => {
          console.log('Error fetching meals:', error);
        }
      );
    }
 
  }

  addToFavorites(meal: any) {
    this.favoriteService.addFavorite(meal);
    console.log('Favorite meals:',  this.favoriteService.getFavorites());
  }

}
