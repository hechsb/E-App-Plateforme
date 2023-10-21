import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-add-course',
  templateUrl: './admin-add-course.component.html',
  styleUrls: ['./admin-add-course.component.css']
})
export class AdminAddCourseComponent implements OnInit {
  classId: string | undefined;
  courses: any[] = [];
  name: string = '';
  file: File | null = null;
  errorMessage: string = '';

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.classId = params['classId'];
      this.fetchCourses();
    });
  }

  onFileSelected(event: any): void {
    const fileInput = event.target;
    if (fileInput.files && fileInput.files.length > 0) {
      this.file = fileInput.files[0];
    }
  }

  handleSubmit(): void {
    if (!this.name || !this.file) {
      this.errorMessage = 'Please provide both a name and a file.';
      return;
    }

    const formData = new FormData();
    formData.append('name', this.name);
    formData.append('file', this.file);

    this.http
      .post(`http://localhost:3000/courses/${this.classId}`, formData)
      .subscribe({
        next: (response) => {
          console.log('Course added successfully!');
          this.fetchCourses();
          this.name = '';
          this.file = null;
          this.errorMessage = '';
        },
        error: (error) => {
          console.error('Error adding course:', error);
          this.errorMessage = 'An error occurred while adding the course.';
        }
      });
  }

  fetchCourses(): void {
    this.http
      .get(`http://localhost:3000/courses/${this.classId}`)
      .subscribe({
        next: (data: any) => {
          this.courses = data;
        },
        error: (error) => {
          console.error('Error fetching courses:', error);
          this.errorMessage = 'An error occurred while fetching courses.';
        }
      });
  }
}
