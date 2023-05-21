import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  appDescription?: string = 'This is a test app created for review purposes.';
  techStack: string[] = ['Angular', 'HTML', 'CSS'];
  designer?: string = 'Designed by Majd Kilou';
}
