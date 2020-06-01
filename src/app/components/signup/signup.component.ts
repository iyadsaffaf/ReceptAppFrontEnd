import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { AuthServiceService } from 'src/app/Services/auth-service.service';
import { TokenService } from 'src/app/Services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  // public form:{
  //   email:null,
  //   name:null,
  //   password:null,
  //   passwordConfirmation:null
  // }



  public form={
    email:null,
    password:null,
    password_confirmation: null,
    name:null

  }
  public error={  email:null,
    password:null,
    name:null};
  constructor(private auth:AuthServiceService, private Token: TokenService,private router:Router) {


   }

  ngOnInit(): void {


  }

  onSubmit() {
    console.log(this.form)

      this.auth.signup(this.form).subscribe(
      data => this.handleResponse(data),
      error=>this.handelError(error)

    );

  }
  handelError(error){
    this.error=error.error.errors;
  }
  handleResponse(data) {
    this.Token.handle(data.access_token);

    this.router.navigateByUrl('/profile');

  }
}
