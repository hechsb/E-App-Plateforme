import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HttpClientModule ,HTTP_INTERCEPTORS  } from '@angular/common/http';
import { TestRedirectionUserComponent } from './user/test-redirection-user/test-redirection-user.component';
import { TestRedirectionAdminComponent } from './admin/test-redirection-admin/test-redirection-admin.component';
import { UserComponent } from './user/user.component';
import { UserNavBarComponent } from './user/user-nav-bar/user-nav-bar.component';
import { ClassesComponent } from './user/classes/classes.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthInterceptor } from './auth.interceptor';
import { AuthGuard } from 'src/Services/auth-guard.service';
import { AuthService } from 'src/Services/auth.service';
import { HomeComponent } from './user/home/home.component';
import { CoursesComponent } from './user/courses/courses.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    TestRedirectionUserComponent,
    TestRedirectionAdminComponent,
    UserComponent,
    UserNavBarComponent,
    ClassesComponent,
    SignUpComponent,
    HomeComponent,
    CoursesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    AuthGuard,
    AuthService,
  ],    
  bootstrap: [AppComponent]
})
export class AppModule { }
