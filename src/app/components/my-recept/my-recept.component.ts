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
    
  }
}
