import { Component } from '@angular/core';
import { Class } from '../class'
import { ClassService } from '../../Services/class.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {


  classes: Class[] = []

  constructor(private classService: ClassService) {

  }


  getClasses(): void {
    this.classService.getClasses()
      .subscribe(classes => this.classes = classes);
  }


  ngOnInit(): void {
    this.getClasses()
  }

}







