import { Component } from '@angular/core';
import { Class } from '../../class'
import { ClassService } from '../../../Services/class.service'

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent {


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

