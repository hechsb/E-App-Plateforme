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

  filteredClasses: Class[] = this.classes;

  joinButton: string = localStorage.getItem('join') || 'Join'

  constructor(private classService: ClassService, private route: ActivatedRoute) {

  }



  getClasses(): void {
    this.classService.getClasses()
      .subscribe((classes) => { this.classes = classes; this.filteredClasses = classes });
  }






  joinClass(classID: number, userID: number): void {

    this.classService.joinClass(classID, userID)
      .subscribe(
        (response) => {
          alert("Your request was sent to the admin.");
          localStorage.setItem(`join ${classID}-${userID}`, 'Request sent!')
          this.getClasses()
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

