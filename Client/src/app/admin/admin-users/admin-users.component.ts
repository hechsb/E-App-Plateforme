import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AdminUsersService } from '../../../Services/admin-users.service';


@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent {
  // Property to store pending users
  pendingUsers: any[] = [];

  constructor(private http: HttpClient, private AdminUsersService: AdminUsersService) { }



  getStudentsPendingClasses(): void {
    this.AdminUsersService.getStudentsPendingClasses()
      .subscribe((pending) => {
        this.pendingUsers = pending;

        this.fetchAdditionalUserData()

      });
  }

  fetchAdditionalUserData(): void {
    for (const user of this.pendingUsers) {
      this.AdminUsersService.fetchData(user, user.studentId, user.classId)
        .subscribe((data) => {
          user.info = data.info.message; // Assuming `info` is the user data
          user.userClass = data.userClass; // Assuming `userClass` is the class data
          console.log(data)
        });
    }
  }

  ngOnInit(): void {

    this.getStudentsPendingClasses()
  }

  // Function to handle user acceptance
  handleAccept(userId: number, classId: number): void {
    this.AdminUsersService.handleAccept(classId, userId)
      .subscribe(
        (response) => {
          this.getStudentsPendingClasses()
        },
        (error) => {
          console.log(error)
        }
      )

  }
  // Function to handle user rejection
  handleReject(userId: number, classId: number): void {
    this.AdminUsersService.handleReject(classId, userId)
      .subscribe(
        (response) => {
          console.log('rejected')
          this.getStudentsPendingClasses()
        },
        (error) => {
          console.log(error)
        }
      )

  }
}