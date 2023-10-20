import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-nav-bar',
  templateUrl: './user-nav-bar.component.html',
  styleUrls: ['./user-nav-bar.component.css']
})
export class UserNavBarComponent {

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
