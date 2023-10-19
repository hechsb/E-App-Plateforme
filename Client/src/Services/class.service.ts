import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Class } from '../app/class'



@Injectable({
  providedIn: 'root'
})
export class ClassService {

  constructor(private http: HttpClient) {
  }

  private classesUrl = 'http://localhost:3000/classess/getAll';

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
    return this.http.get<Class[]>(this.classesUrl)
      .pipe(
        catchError(this.handleError<Class[]>('getClasses', []))
      );
  }



}
