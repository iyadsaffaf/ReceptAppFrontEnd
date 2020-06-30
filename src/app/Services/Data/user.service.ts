import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user:User;
  private data=new BehaviorSubject(this.user);
  currentData=this.data.asObservable();
  constructor() { }

  changeData(data){
    this.data.next(data);

  }
}


export class User {
  id: string
  name:string
  email:string



}
