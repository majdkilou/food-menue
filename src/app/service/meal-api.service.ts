import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MealApiService {
  private baseUrl = 'https://www.themealdb.com/api/json/v1/1';
  private apiKey = '1';
  private imagesUrl = 'https://api.example.com/meals/images';


  constructor(private http: HttpClient) { }

  private addApiKey(url: string): string {
    return `${url}?api-key=${this.apiKey}`;
  }

  // Method to search meal by name
  searchMealByName(name: string): Observable<any> {
    const url = this.addApiKey(`${this.baseUrl}/search.php?s=${name}`);
    return this.http.get(url);
  }

  // Method to list all meals by first letter
  listMealsByFirstLetter(letter: string): Observable<any> {
    const url = this.addApiKey(`${this.baseUrl}/search.php?f=${letter}`);
    return this.http.get(url);
  }

  // Method to lookup full meal details by id
  lookupMealById(id: string): Observable<any> {
    const url = this.addApiKey(`${this.baseUrl}/lookup.php?i=${id}`);
    return this.http.get(url);
  }

  // Method to lookup a single random meal
  lookupRandomMeal(): Observable<any> {
    const url = this.addApiKey(`${this.baseUrl}/random.php`);
    return this.http.get(url);
  }

  // Method to lookup a selection of 10 random meals (only available to Paypal supporters)
  lookupRandomMeals(): Observable<any> {
    const url = this.addApiKey(`${this.baseUrl}/randomselection.php`);
    return this.http.get(url);
  }

  // Method to list all meal categories
  listMealCategories(): Observable<any> {
    const url = this.addApiKey(`${this.baseUrl}/categories.php`);
    return this.http.get(url);
  }

  // Method to list all Categories, Area, Ingredients
  listCategories(): Observable<any> {
    const url = this.addApiKey(`${this.baseUrl}/list.php?c=list`);
    return this.http.get(url);
  }

  listAreas(): Observable<any> {
    const url = this.addApiKey(`${this.baseUrl}/list.php?a=list`);
    return this.http.get(url);
  }

  listIngredients(): Observable<any> {
    const url = this.addApiKey(`${this.baseUrl}/list.php?i=list`);
    return this.http.get(url);
  }

  // Method to filter by main ingredient
  filterByIngredient(ingredient: string): Observable<any> {
    const url = this.addApiKey(`${this.baseUrl}/filter.php?i=${ingredient}`);
    return this.http.get(url);
  }

  // Method to filter by multi-ingredient (only available to Paypal supporters)
  filterByIngredients(ingredients: string[]): Observable<any> {
    const ingredientsStr = ingredients.join(',');
    const url = this.addApiKey(`${this.baseUrl}/filter.php?i=${ingredientsStr}`);
    return this.http.get(url);
  }

  // Method to filter by Category
  filterByCategory(category: string): Observable<any> {
    const url = `${this.baseUrl}/filter.php?c=${category}`;
    return this.http.get(url);
  }

  // Method to filter by Area
  filterByArea(area: string): Observable<any> {
    const url = this.addApiKey(`${this.baseUrl}/filter.php?a=${area}`);
    return this.http.get(url);
  }

  getMealImages(): Observable<any> {
    const url = `${this.baseUrl}/randomselection.php`;
    return this.http.get(url);
  }
  
}
