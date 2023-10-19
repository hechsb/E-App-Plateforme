import { Component, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-add-course',
  templateUrl: './admin-add-course.component.html'
})
export class AddCourseComponent {
  @Input() classId: number; // Assuming classId is an input property

  name: string = '';
  file: File;

  constructor(private http: HttpClient) {}

  handleSubmit() {
    const formData = new FormData();
    formData.append('name', this.name);
    formData.append('file', this.file);

    const headers = new HttpHeaders({ 'Content-Type': 'multipart/form-data' });

    this.http.post(`http://localhost:3000/courses/${this.classId}`, formData, { headers })
      .subscribe(
        () => {
          console.log('Course added successfully!');
          // Call a function to fetch courses if needed.
        },
        (error) => {
          console.error('Error adding course:', error);
        }
      );
  }

  onFileChange(event: any) {
    this.file = event.target.files[0];
  }
}
