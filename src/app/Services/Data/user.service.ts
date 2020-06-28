import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: User;
  private data = new BehaviorSubject(this.user);
  currentData = this.data.asObservable();

  constructor(private http: HttpClient) {

  }

  changeData(data) {
    this.data.next(data);

  }
}
export class User {
  id: string;
  name: number;
  email: string;
  createda: string;
  tags: string;
  d: string;
  url: string;

}
