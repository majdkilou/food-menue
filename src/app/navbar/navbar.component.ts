import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  public sidebarVisible: boolean;
  public opened = false;
  constructor(private router: Router) {
    this.sidebarVisible = true; // Assign a value here
  }


handleClick() {
 

  // Navigate to the "favorites" path
  this.router.navigate(['/favorites']);
}
}
