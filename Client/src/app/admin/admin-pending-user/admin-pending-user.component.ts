import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-admin-pending-user',
  templateUrl: './admin-pending-user.component.html',
  styleUrls: ['./admin-pending-user.component.css']
})
export class AdminPendingUserComponent implements OnInit {
  userr: any;
  info: any = {};
  userClass: any = {};

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    // Make both requests concurrently using HttpClient
    const userInfoRequest = this.http.get(`http://localhost:3000/User/getOneUser/${this.userr.studentId}`);
    const userClassRequest = this.http.get(`http://localhost:3000/classess/${this.userr.classId}`);

    // Use forkJoin to handle both requests and update data
    forkJoin([userInfoRequest, userClassRequest]).subscribe({
      next: (results: any[]) => {
        this.info = results[0];
        this.userClass = results[1];
      },
      error: (error: any) => {
        console.log(error);
      }
    })


  }

  onAccept() {
    console.log("Accepted user with ID: ", this.userr);
  }

  onReset() {
    console.log("Rejected user with ID: ", this.userr);
  }
}
