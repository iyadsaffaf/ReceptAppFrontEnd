import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

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
  public error=['password','email'];
  constructor(private http:HttpClient) { }

  ngOnInit(): void {


  }

  onSubmit() {
    console.log(this.form)

    return this.http.post('http://127.0.0.1:8000/api/signup',this.form).subscribe(
      data=>console.log(data),
      error=>this.handelError(error)

    );

  }
  handelError(error){
    this.error=error.error.errors;
  }
}
