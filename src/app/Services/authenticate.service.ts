import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TokenService } from './token.service';


@Injectable({
})
export class AuthenticateService {
  private loggedIn= new BehaviorSubject<boolean>(this.Token.loggedIn());
  auths

  constructor() { }
}
