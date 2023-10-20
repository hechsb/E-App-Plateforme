import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/Services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  myForm : FormGroup;

  constructor(private fb :FormBuilder , private authService : AuthService ){
    this.myForm=this.fb.group({
      email : ["",Validators.email],
      password :["",[Validators.required ]]
    })
  }
  

  submitForm(){
    if (this.myForm.valid) {
      console.log(this.myForm.value);
      this.authService.logUser(this.myForm.value)
    }
  
  }
}
