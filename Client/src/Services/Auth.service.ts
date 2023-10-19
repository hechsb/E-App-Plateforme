import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient ,private router: Router) { }
  //logging user 
  logUser(inputs:{email :string,password:string}){
    this.http.post<{name:string , token:string, user:any }>(
      'http://localhost:3000/User/logUser',
      inputs
    ).subscribe((response)=>{
      localStorage.setItem("token", response.token)
      console.log(response.user)
      if (response.user.role === "admin") {
        console.log("hello admin");
        this.router.navigate(['adminPage']);
      } else {
        console.log("hello from user");
        this.router.navigate(['userPage']);
        console.log("cc")
      }
    })
  }

  //adding a user
  signUp(){

  }
}
