import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Course } from 'src/app/course';

@Component({
  selector: 'app-admin-courses',
  templateUrl: './admin-courses.component.html',
  styleUrls: ['./admin-courses.component.css']
})
export class AdminCoursesComponent {
  
   courses: Course[] = [];
  classId!: string | null;
  courseService: any;
  updatedFile: File | null = null;
  
  

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.classId = params.get('classId');
      this.fetchCourses();
    });
  }
  
  

  fetchCourses() {
    if (this.classId) {
      this.http.get<Course[]>(`http://localhost:3000/courses/${this.classId}`)
        .subscribe(data => {
          this.courses = data;
        });
    }
  }

}
