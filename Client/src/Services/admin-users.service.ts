import { Injectable } from '@angular/core';
import { Observable, of, forkJoin } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../app/user'


@Injectable({
  providedIn: 'root'
})
export class AdminUsersService {

  constructor(private http: HttpClient) { }


  private allPendingClassesUrl = "http://localhost:3000/classess/getPendingStudentClasses";
  private acceptStudent = "http://localhost:3000/classess/accept"
  private rejectStudent = "http://localhost:3000/classess/reject"
  private oneUser = "http://localhost:3000/User/getOneUser"
  private class = "http://localhost:3000/classess"

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);
      return of(result as T);
    };
  }


  getStudentsPendingClasses(): Observable<User[]> {
    return this.http.get<User[]>(this.allPendingClassesUrl)
      .pipe(
        catchError(this.handleError<User[]>('getStudentsPendingClasses', []))
      );
  }

  handleAccept(userId: number, classId: number) {
    return this.http.put(`${this.acceptStudent}/${classId}/${userId}`, {})
      .pipe(
        catchError(this.handleError('handleAccept', []))
      )
  }
  handleReject(userId: number, classId: number) {
    return this.http.put(`${this.rejectStudent}/${classId}/${userId}`, {})
      .pipe(
        catchError(this.handleError('handleReject', []))
      )
  }

  fetchData(user: any, studentId: number, classId: number): Observable<any> {
    const userInfoRequest = this.http.get(`${this.oneUser}/${studentId}`);
    const userClassRequest = this.http.get(`${this.class}/${classId}`);

    return new Observable((observer) => {
      forkJoin([userInfoRequest, userClassRequest]).subscribe(
        ([userInfoResponse, userClassResponse]) => {
          const info = userInfoResponse;
          const userClass = userClassResponse;
          observer.next({ info, userClass });
          observer.complete();
        },
        (error) => {
          console.error(error);
          observer.error(error);
        }
      );
    });
  }




}
