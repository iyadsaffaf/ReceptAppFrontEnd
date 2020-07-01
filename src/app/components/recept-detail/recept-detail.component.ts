import { Component, OnInit } from '@angular/core';
import {DataService, Recept} from "../../Services/data.service";
import {User} from "../../Services/Data/user.service";
import {HttpClient} from "@angular/common/http";
import {Favourite} from "../../Services/Data/favourite-service.service";

@Component({
  selector: 'app-recept-detail',
  templateUrl: './recept-detail.component.html',
  styleUrls: ['./recept-detail.component.css']
})
export class ReceptDetailComponent implements OnInit {
   recept:Recept;
   public  user:User =new User();
  private favourite:Favourite;


  private baseUrl='http://127.0.0.1:8000/api';
  constructor(private dataService:DataService,private http:HttpClient) { }

  ngOnInit(): void {
  //  this.user.name="";


    this.dataService.currentData.subscribe(data=>this.recept=data)
    this.http.get(`${this.baseUrl}/user`+'/'+this.recept.user_id).subscribe(
      data => this.handleResponse(data),
      error=>this.handelError(error)

    );


  }



  private handelError(error: any) {

  }

  private handleResponse(data) {
            this.user=data;
  }
  onSave(data) {
    console.log(data);

    this.favourite=new Favourite();
    this.favourite.user_id=data.id;
    this.favourite.recept_id=data.id;
    console.log(this.favourite);

    this.http.post(`http://127.0.0.1:8000/api/favourite`,this.favourite).subscribe((data: any[])=>{
      console.log(data);

      // this.recepts = data;
    })
  }
}


