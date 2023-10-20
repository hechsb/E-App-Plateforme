import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestRedirectionUserComponent } from './user/test-redirection-user/test-redirection-user.component';
import { TestRedirectionAdminComponent } from './admin/test-redirection-admin/test-redirection-admin.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { UserComponent } from './user/user.component'
import { ClassesComponent } from './user/classes/classes.component';
import { HomeComponent } from './user/home/home.component'
import { CoursesComponent } from './user/courses/courses.component'
const routes: Routes = [
  { path: '', component: SignInComponent },
  { path: 'userPage', component: TestRedirectionUserComponent },
  { path: 'adminPage ', component: TestRedirectionAdminComponent },
  { path: 'student-home', component: HomeComponent },
  { path: 'student-classes', component: ClassesComponent },
  { path: 'student-courses/:id', component: CoursesComponent }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
