import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-users',
  templateUrl:'./admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent {
  // Property to store pending users
  pendingUsers: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Fetch pending users on component initialization
    this.http.get('http://localhost:3000/classess/getPendingStudentClasses')
      .subscribe((response: any) => {
        this.pendingUsers = response;
        console.log('Here are pending users', this.pendingUsers);
      }, error => {
        console.error(error);
      });
  }

  // Function to handle user acceptance
  handleAccept(userId: number, classId: number): void {
    // Handle user acceptance here
    console.log('Accepted user with ID: ', userId);
    this.http.put(`http://localhost:3000/classess/accept/${classId}/${userId}`, {})
      .subscribe(() => {
        // Reload the page after the request is complete
        window.location.reload();
      });
  }

  // Function to handle user rejection
  handleReject(userId: number): void {
    // Handle user rejection here
    console.log('Rejected user with ID: ', userId);
  }
}