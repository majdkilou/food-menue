import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../service/photo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  images: any[] = []; // Initialize images as an empty array

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

  constructor(private photoService: PhotoService) { }

  ngOnInit(): void {
    this.photoService.getImages().then((images) => {
      console.log(images);
      this.images = images;
    });
  }
}
