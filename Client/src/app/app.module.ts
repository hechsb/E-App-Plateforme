import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddCourseComponent } from './admin-add-course/admin-add-course.component';






=======
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HttpClientModule } from '@angular/common/http';
import { TestRedirectionUserComponent } from './user/test-redirection-user/test-redirection-user.component';
import { TestRedirectionAdminComponent } from './admin/test-redirection-admin/test-redirection-admin.component';
import { UserComponent } from './user/user.component';
import { UserNavBarComponent } from './user/user-nav-bar/user-nav-bar.component';
import { ClassesComponent } from './user/classes/classes.component';
>>>>>>> 67fd9288872c7f5a52fee0574e837112d7a51e8f

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    AddCourseComponent,

    
  
=======
    SignInComponent,
    TestRedirectionUserComponent,
    TestRedirectionAdminComponent,

    UserComponent,
    UserNavBarComponent,
    ClassesComponent
>>>>>>> 67fd9288872c7f5a52fee0574e837112d7a51e8f
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
<<<<<<< HEAD
    HttpClientModule
  ],
    
  providers: [],
=======
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [],    
>>>>>>> 67fd9288872c7f5a52fee0574e837112d7a51e8f
  bootstrap: [AppComponent]
})

export class AppModule { }
