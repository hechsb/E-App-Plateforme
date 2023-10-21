import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class AdminClassService{
   
      constructor(private http : HttpClient) { }
    
    
      fetchClasses() {
        return this.http.get<any[]>('http://localhost:3000/classess/getAll');
      }
 
    
    }

