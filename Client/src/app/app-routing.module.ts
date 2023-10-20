import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestRedirectionAdminComponent } from './admin/test-redirection-admin/test-redirection-admin.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { UserComponent } from './user/user.component'
import { ClassesComponent } from './user/classes/classes.component';
import { UserNavBarComponent } from './user/user-nav-bar/user-nav-bar.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthGuard } from 'src/Services/auth-guard.service';
const routes: Routes = [
  { path: '', component: SignInComponent },
  { path: 'adminPage', component: TestRedirectionAdminComponent, canActivate: [AuthGuard], data: { roles: ['admin'] } },
  { path: 'userPage', component: UserNavBarComponent, canActivate: [AuthGuard], data: { roles: ['user'] } },
  { path: 'user', component: UserComponent },
  { path: 'classes', component: ClassesComponent ,canActivate: [AuthGuard], data: { roles: ['user'] } },
  { path: 'signup', component: SignUpComponent },
  { path: 'signin', component: SignInComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
