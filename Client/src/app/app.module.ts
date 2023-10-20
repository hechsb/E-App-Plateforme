import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HttpClientModule } from '@angular/common/http';
import { TestRedirectionUserComponent } from './user/test-redirection-user/test-redirection-user.component';
import { TestRedirectionAdminComponent } from './admin/test-redirection-admin/test-redirection-admin.component';
import { UserComponent } from './user/user.component';
import { UserNavBarComponent } from './user/user-nav-bar/user-nav-bar.component';
import { AdminClassesComponent } from './admin/admin-classes/admin-classes.component';
import { AdminNavbarComponent } from './admin/admin-navbar/admin-navbar.component';
import { AdminPendingUserComponent } from './admin/admin-pending-user/admin-pending-user.component';
import { AdminSidebarComponent } from './admin/admin-sidebar/admin-sidebar.component';
import { AdminUsersComponent } from './admin/admin-users/admin-users.component';
import { AdminAddCourseComponent } from './admin/admin-add-course/admin-add-course.component';
import { AdminCoursesComponent } from './admin/admin-courses/admin-courses.component';
import { AdminCourseComponent } from './admin/admin-course/admin-course.component';




@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    TestRedirectionUserComponent,
    TestRedirectionAdminComponent,
    UserComponent,
    UserNavBarComponent,
    AdminClassesComponent,
    AdminNavbarComponent,
    AdminPendingUserComponent,
    AdminSidebarComponent,
    AdminUsersComponent,
    AdminAddCourseComponent,
    AdminCoursesComponent,
    AdminCourseComponent


 
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [],    
  bootstrap: [AppComponent]
})

export class AppModule { }
