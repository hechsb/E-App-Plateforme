import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CoursesService } from 'src/Services/courses.service';


@Component({
  selector: 'app-admin-course',
  templateUrl: './admin-course.component.html',
  styleUrls: ['./admin-course.component.css']
})
export class AdminCourseComponent {
  @Input() course: any; // You can create an interface for the course object

  updatedName: string = '';
  updatedFile: File | undefined = undefined;
  isEditMode: boolean = false;

  constructor(private http: HttpClient) {}

  handleOpenPDF() {
    window.open(`http://localhost:3000/${this.course.file}`, "_blank");
  }

  handleUpdate() {
    const formData = new FormData();
    formData.append('name', this.updatedName);
    if (this.updatedFile) {
      formData.append('file', this.updatedFile);
    }

    this.http.put(`http://localhost:3000/courses/${this.course.id}`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    }).subscribe(() => {
      this.isEditMode = false;
    }, error => {
      console.error('Error updating course:', error);
    });
  }

  handleDelete() {
    const shouldDelete = window.confirm('Are you sure you want to delete this course?');
    if (shouldDelete) {
      this.http.delete(`http://localhost:3000/courses/${this.course.id}`).subscribe(() => {
        // Call a function to fetch courses (you should have a service for this)
      }, error => {
        console.log(error);
      });
    }
  }
}
