import { Component } from '@angular/core';

@Component({
  selector: 'app-user-nav-bar',
  templateUrl: './user-nav-bar.component.html',
  styleUrls: ['./user-nav-bar.component.css']
})
export class UserNavBarComponent {

  log(something: any): void {
    console.log(something)
  }

  showMe: boolean = false

  toggle(): void {
    this.showMe = !this.showMe
  }

}
