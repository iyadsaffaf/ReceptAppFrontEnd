import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/Services/auth-service.service';
import { TokenService } from 'src/app/Services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public form={
  email:null,
  password:null,

}
public error=null;

  constructor(private auth:AuthServiceService, private Token: TokenService,private router:Router ) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.auth.login(this.form).subscribe(
     data => this.handleResponse(data),
     error=>this.handelError(error)

   );
    console.log(this.form)
  }
  handelError(error){
    this.error=error.error.error;
  }
  handleResponse(data) {
    this.Token.handle(data.access_token);

    this.router.navigateByUrl('/profile');

  }

}
