import { Component } from '@angular/core';
import { Class } from '../../class'
import { ClassService } from '../../../Services/class.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent {


  classes: Class[] = []

  filteredItems: Class[] = this.classes;

  constructor(private classService: ClassService, private route: ActivatedRoute) {

  }



  getClasses(): void {
    this.classService.getClasses()
      .subscribe(classes => this.classes = classes);
  }



  joinClass(classID: number, userID: number): void {

    this.classService.joinClass(classID, userID)
      .subscribe(
        (response) => {
          alert("Your request was sent to the admin.");
        },
        (error) => {
          console.log(error)
        }
      )

  }

  ngOnInit(): void {
    this.getClasses()
  }

}

