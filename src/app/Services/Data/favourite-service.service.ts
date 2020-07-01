import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {User} from "./user.service";

@Injectable({
  providedIn: 'root'
})
export class FavouriteServiceService {
  private favourite:Favourite;
  private data=new BehaviorSubject(this.favourite
  );
  currentData=this.data.asObservable();
  constructor() { }

  changeData(data){
    this.data.next(data);

  }
}

export class Favourite {
  id: string
  user_id:string
  recept_id:string




}
