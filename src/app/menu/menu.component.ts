import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MealApiService } from '../service/meal-api.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  categories: any[] = [];  
  selectedCategory?: string;


  constructor(private mealApiService: MealApiService) {}

  ngOnInit() {
    this.mealApiService.listMealCategories().subscribe(
      (response) => {
        this.categories = response.categories;
        console.log('Meal categories:', this.categories);
      },
      (error) => {
        console.log('Error fetching meal categories:', error);
      }
    );
  }
  onCategorySelected(category: string) {
  
    this.selectedCategory = category;
  
  }

}
