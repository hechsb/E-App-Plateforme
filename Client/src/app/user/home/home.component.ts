import { Component } from '@angular/core';
import { Class } from '../../class'
import { ClassService } from '../../../Services/class.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  searchQuery = ''

  classes: Class[] = []

  filteredClasses: Class[] = [];


  constructor(private classService: ClassService) {

  }

  getClasses(): void {
    this.classService.getEnrolledClasses()
      .subscribe(classes => {
        this.classes = classes;
        this.filteredClasses = classes
      })
  }

  updateFilter() {
    console.log(this.searchQuery)
    this.filteredClasses = this.classes.filter(filtered =>
      filtered.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );

  }

  ngOnInit(): void {
    this.getClasses()
  }

}
