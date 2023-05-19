import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  public sidebarVisible: boolean;
  constructor() {
    this.sidebarVisible = true; // Assign a value here
  }
}
