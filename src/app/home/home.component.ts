import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../service/photo.service';
import { MealApiService } from '../service/meal-api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  images: any[] = []; // Initialize images as an empty array
  meals: any[] = []; // Initialize meals as an empty array
  centered = false;
  disabled = false;
  unbounded = false;

  radius?: number;
  color?: 'red';

  public responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5,
    },
    {
      breakpoint: '768px',
      numVisible: 3
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];

  constructor(private photoService: PhotoService, private mealApiService: MealApiService , private router: Router ) { }

  navigateTo(page: string): void {
    switch (page) {
      case 'menu':
        this.router.navigate(['menu']);
        break;
      case 'favorites':
        this.router.navigate(['favorites']);
        break;
      case 'random-meal':
        this.router.navigate(['meal-generator']);
        break;
      default:
        // Handle other cases or show an error message
        break;
    }
  }
  ngOnInit(): void {
    this.photoService.getImages().then((images) => {
      console.log(images);
      this.images = images;
    });

    this.mealApiService.lookupRandomMeal().subscribe((response) => {
      console.log(response);
      this.meals = response.meals;
      console.log(this.meals);
    });
  }
}
