import { Component } from '@angular/core';
import { Class } from '../../class'
import { ClassService } from '../../../Services/class.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  // styleUrls: ['./classes.component.css']
})
export class ClassesComponent {

  searchQuery = ''

  classes: Class[] = []

  filteredClasses: Class[] = [];


  constructor(private classService: ClassService, private route: ActivatedRoute) { }



  getClasses(): void {
    this.classService.getClasses()
      .subscribe((classes) => {
        this.classes = classes;
        this.filteredClasses = classes
      });
  }

  updateFilter() {
    console.log(this.searchQuery)
    this.filteredClasses = this.classes.filter(filtered =>
      filtered.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );

  }

  modal: boolean = false

  toggle() {
    this.modal = !this.modal
  }



  joinClass(classID: number, userID: number): void {

    this.classService.joinClass(classID, userID)
      .subscribe(
        (response) => {
          this.toggle()
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

