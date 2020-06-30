import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {User, UserService} from "../../Services/Data/user.service";
import {HttpClient} from "@angular/common/http";
import {DataService, Recept} from "../../Services/data.service";

@Component({
  selector: 'app-my-recept',
  templateUrl: './my-recept.component.html',
  styleUrls: ['./my-recept.component.css']
})
export class MyReceptComponent implements OnInit {
  public user:User;
  private baseUrl='http://127.0.0.1:8000/api';

  private recept:Recept;
  recepts=[];

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
  }
  onClick(){
    this.router.navigateByUrl('/newrecept');
  }

  onSelect(item: any) {
    //this.router.navigateByUrl('/editerecept');

  }

  onEditClick(data) {
    this.recept=data;
    this.dataService.currentData.subscribe(data=>this.recept=data)
    this.dataService.changeData(data);
    this.router.navigateByUrl('/editerecept');

  }

  onDeleteClick(data) {
    this.recept=data;
    this.dataService.currentData.subscribe(data=>this.recept=data)
    this.dataService.changeData(data);

    this.http.delete(`${this.baseUrl}/recept`+'/'+this.recept.id).subscribe(
      data => this.handleResponse(data),
      error=>this.handelError(error)

    );
  }

  private handelError(error: any) {

  }

  private handleResponse(data: Object) {
    this.router.navigateByUrl('/home')

  }
}
