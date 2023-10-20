import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.css']
})
export class AdminSidebarComponent {
  homeRoute = 'admin/home';
  usersRoute = 'admin/users';
  classesRoute = 'admin/classes';
  logoutRoute = 'login';
}
