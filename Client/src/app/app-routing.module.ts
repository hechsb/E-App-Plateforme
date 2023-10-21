import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestRedirectionAdminComponent } from './admin/test-redirection-admin/test-redirection-admin.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { UserComponent } from './user/user.component'
import { ClassesComponent } from './user/classes/classes.component';
import { UserNavBarComponent } from './user/user-nav-bar/user-nav-bar.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthGuard } from 'src/Services/auth-guard.service';
import { HomeComponent } from './user/home/home.component'
import { CoursesComponent } from './user/courses/courses.component'
<<<<<<< HEAD
import { TodoListComponent } from './user/todo-list/todo-list.component'
=======
import { AdminUsersComponent } from './admin/admin-users/admin-users.component';
import { AdminClassesComponent } from './admin/admin-classes/admin-classes.component';
import { AdminNavbarComponent } from './admin/admin-navbar/admin-navbar.component'; 

>>>>>>> ff0272aeaff426d85922c410b918307e7a0bdbe4

const routes: Routes = [
  { path: '', component: SignInComponent },
  { path: 'adminPage', component: AdminNavbarComponent, canActivate: [AuthGuard], data: { roles: ['admin'] } },
  { path: 'userPage', component: UserNavBarComponent, canActivate: [AuthGuard], data: { roles: ['user'] } },
  { path: 'user', component: UserComponent },
  { path: 'classes', component: ClassesComponent, canActivate: [AuthGuard], data: { roles: ['user'] } },
  { path: 'signup', component: SignUpComponent },
  { path: 'signin', component: SignInComponent },
<<<<<<< HEAD
  { path: 'student-home', component: HomeComponent, canActivate: [AuthGuard], data: { roles: ['user'] } },
  { path: 'student-classes', component: ClassesComponent, canActivate: [AuthGuard], data: { roles: ['user'] } },
  { path: 'student-courses/:id', component: CoursesComponent },
  { path: 'personal-space', component: TodoListComponent }
=======
  { path: 'student-home', component: HomeComponent ,canActivate: [AuthGuard], data: { roles: ['user'] }},
  { path: 'student-classes', component: ClassesComponent ,canActivate: [AuthGuard], data: { roles: ['user'] } },
  { path: 'student-courses/:id', component: CoursesComponent },
  {path : 'adminUsers' , component :AdminUsersComponent},
  {path : 'admin-classes', component:AdminClassesComponent}
  // {path:'adminPage', component : AdminClassesComponent}
>>>>>>> ff0272aeaff426d85922c410b918307e7a0bdbe4

];

@NgModule ({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
