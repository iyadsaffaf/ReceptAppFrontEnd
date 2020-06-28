import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from 'src/app/Services/authenticate.service';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/Services/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public loggedIn: boolean;

  constructor(
    private Auth: AuthenticateService,
    private router: Router,
    private token: TokenService
    ) { }

  ngOnInit() {
       this.Auth.authStatus.subscribe(value => this.loggedIn = value);


  }
  Logout(event: MouseEvent){
   event.preventDefault();
   this.token.remove();
   this.Auth.changeAuthStatus(false);
   this.router.navigateByUrl('/login');
  }

}
