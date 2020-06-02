import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Recept} from "../components/recept-detail/recept-detail.component";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data=new BehaviorSubject({});
  currentData:Observable<{}>=this.data.asObservable();
  constructor() { }
  changeData(data){
    this.data.next(data);

  }
}
