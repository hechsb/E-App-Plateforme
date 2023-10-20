import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestRedirectionUserComponent } from './user/test-redirection-user/test-redirection-user.component';
import { TestRedirectionAdminComponent } from './admin/test-redirection-admin/test-redirection-admin.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { UserComponent } from './user/user.component';
import { AdminClassesComponent } from './admin/admin-classes/admin-classes.component';
import { AdminNavbarComponent } from './admin/admin-navbar/admin-navbar.component';


const routes: Routes = [
  {path : '', component : SignInComponent},
  { path: 'userPage', component: TestRedirectionUserComponent },
  {path : 'adminPage ', component : TestRedirectionAdminComponent },
  { path: 'user', component: UserComponent },
  {path: 'adminClasses', component: AdminClassesComponent},
  {path: 'adminClasses', component: AdminNavbarComponent}

  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
