import { Component, OnInit } from '@angular/core';
import {User, UserService} from "../../Services/Data/user.service";
import {DataService, Recept} from "../../Services/data.service";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Favourite} from "../../Services/Data/favourite-service.service";

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {
  public user:User;
  private baseUrl='http://127.0.0.1:8000/api';
  private favourite:Favourite;


  private recept:Recept;
  recepts=[];
  favoutits=[];
  constructor(private http:HttpClient,
              private router:Router,
              private dataService:DataService,private userService:UserService) {

  }

  ngOnInit(): void {
    this.userService.currentData.subscribe(data=>this.user=data)

    this.http.get(`http://127.0.0.1:8000/api/recept`).subscribe((data: any[])=>{
      //  console.log(data);

      this.recepts = data;

    })
    this.http.get(`http://127.0.0.1:8000/api/recept`).subscribe((data: any[])=>{
      //  console.log(data);

      this.favoutits = data;
    })
  }

  onDeleteClick(item: any) {

  }

  onSelect(item: any) {

  }
}
