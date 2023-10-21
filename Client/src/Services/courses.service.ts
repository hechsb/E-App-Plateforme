import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Course } from '../app/course'

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  

  constructor(private http: HttpClient) { }
             

  private coursesUrl = 'http://localhost:3000/courses';
  private baseUrl = 'http://localhost:3000/admin-course';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);
      return of(result as T);
    };
  }
  addCourseToClass(classId: string, name: string, file: File) {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('file', file);

    return this.http.post(`${this.baseUrl}/classes/${classId}/addCourse`, formData);
  }



  getCourses(id: number): Observable<Course[]> {
    const url = `${this.coursesUrl}/${id}`
    return this.http.get<Course[]>(url)
      .pipe(
        tap(_ => this.log('aaaaaaaaaaaaaaaaa')),
        catchError(this.handleError<Course[]>('getCourses', []))
      );
  }

  log(something: any): void {
    console.log(something)
  }

} 

