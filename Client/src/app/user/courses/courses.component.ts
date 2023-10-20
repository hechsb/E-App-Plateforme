import { Component } from '@angular/core';
import { Course } from '../../course'
import { CoursesService } from '../../../Services/courses.service'
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';



@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {

  courses: Course[] = []

  constructor(private courseServices: CoursesService,
    private route: ActivatedRoute,
    private location: Location
  ) {

  }


  getCourses(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.courseServices.getCourses(id)
      .subscribe(courses => this.courses = courses)
  }

  handleOpenPDF(file: File): void {
    window.open(`http://localhost:3000/${file}`, "_blank")
  }

  ngOnInit(): void {
    console.log('aaaaaaaaaaa')
    this.getCourses()
  }


}
