import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Class } from '../app/class'
import { User } from '../app/user'




@Injectable({
  providedIn: 'root'
})
export class ClassService {



  constructor(private http: HttpClient) {
  }

  private allClassesUrl = 'http://localhost:3000/classess/getAll';
  private enrolledClassesUrl = `http://localhost:3000/classess/userAcceptedClass/${2}`
  private joinClassUrl = `http://localhost:3000/classess`

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);
      return of(result as T);
    };
  }

  getClasses(): Observable<Class[]> {
    return this.http.get<Class[]>(this.allClassesUrl)
      .pipe(
        catchError(this.handleError<Class[]>('getClasses', []))
      );
  }

  getEnrolledClasses(): Observable<Class[]> {
    return this.http.get<Class[]>(this.enrolledClassesUrl)
      .pipe(
        tap(_ => this.log(this.enrolledClassesUrl)),
        catchError(this.handleError<Class[]>('getClasses', []))
      )
  }

  joinClass(classID: number, userID: number) {
    const url = `${this.joinClassUrl}/${classID}/${userID}`
    return this.http.post(url, null, this.httpOptions)
      .pipe(
        tap(_ => this.log(url)),
        catchError(this.handleError('joinClass', []))
      )
  }



  log(something: any) {
    console.log(something)

  }





}
