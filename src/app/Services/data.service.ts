import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private  recept:Recept;
  private data=new BehaviorSubject(this.recept);

  currentData=this.data.asObservable();
  constructor() { }


  changeData(data){
    this.data.next(data);

  }


}
export class Recept {
  description: string
  id: number
  ingredients: string
  preparation_time: string
  tags: string
  name: string
  url: string
  user_id: string

}
