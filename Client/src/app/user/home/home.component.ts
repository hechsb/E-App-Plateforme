import { Component } from '@angular/core';
import { Class } from '../../class'
import { ClassService } from '../../../Services/class.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  classes: Class[] = []

  constructor(private classService: ClassService) {

  }

  getClasses(): void {
    this.classService.getEnrolledClasses()
      .subscribe(classes => { this.classes = classes; console.log('jawhar') })
  }

  ngOnInit(): void {
    this.getClasses()
  }

}
