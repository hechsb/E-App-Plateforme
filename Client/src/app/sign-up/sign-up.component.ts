import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/Services/auth.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  signUpForm :FormGroup;

  constructor(private fb :FormBuilder, private authService : AuthService  ){

    this.signUpForm=this.fb.group({
      email : ["",Validators.email],
      firstName:["",Validators.required],
      lastName:["",Validators.required],
      password :["",[Validators.required ]]
    })
  }
    submitForm(){
      if (this.signUpForm.valid) {
        console.log(this.signUpForm.value);
        this.authService.signUp(this.signUpForm.value)
       
      }
    
    }
  }
  