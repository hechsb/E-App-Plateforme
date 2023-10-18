import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }
  //logging user 
  logUser(inputs:{email :string,password:string}){
    this.http.post<{name:string , token:string}>(
      'http://localhost:3000/User/logUser',
      inputs
    ).subscribe((response)=>{
      localStorage.setItem("token", response.token)
      
    })
  }

  //adding a user
  signUp(){

  }
}
