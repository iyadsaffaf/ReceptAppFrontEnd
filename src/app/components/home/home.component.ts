import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {DataService, Recept} from "../../Services/data.service";
import {Favourite} from "../../Services/Data/favourite-service.service";
import {User} from "../../Services/Data/user.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public recept:Recept;
   recepts=[];
  public value=""
  private favourite:Favourite;
  public user:User ;

  constructor(private http:HttpClient,
              private router:Router,
              private dataService:DataService
              ) { }

  ngOnInit(): void {



    this.http.get(`http://127.0.0.1:8000/api/recept`).subscribe((data: any[])=>{
    //  console.log(data);

      this.recepts = data;
    })


  }
  onSelect(data){
    //console.log(data);
    this.recept=data;
    this.dataService.currentData.subscribe(data=>this.recept=data)
    this.dataService.changeData(data);
    this.router.navigateByUrl('/receptdetail')

  }

  onEnter(value: string) {
    this.value=value;
  }



}
