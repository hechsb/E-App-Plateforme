import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule  } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent {
  constructor(private router: Router) { }

  
  log(something: any): void {
    console.log(something)
  }

  showMe: boolean = false

  toggle(): void {
    this.showMe = !this.showMe
  }

  logout(): void {
    localStorage.clear()
    this.router.navigate(['/']);

  }
}
