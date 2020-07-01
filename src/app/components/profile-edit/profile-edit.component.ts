import { Component, OnInit } from '@angular/core';
import {User, UserService} from "../../Services/Data/user.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Recept} from "../../Services/data.service";

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {
  public oldUser:User;
  private baseUrl='http://127.0.0.1:8000/api';

  public user:User=new User();

  constructor(private userService:UserService,  private router:Router,private http:HttpClient) { }

  ngOnInit(): void {
    this.userService.currentData.subscribe(data=>this.oldUser=data)

  }
  onSubmit(){
    this.http.put(`${this.baseUrl}/user`+'/'+this.oldUser.id,this.user).subscribe(
      data => this.handleResponse(data),
      error=>this.handelError(error)

    );
  }

  private handleResponse(data: Object) {
    this.userService.changeData(data);
    this.router.navigateByUrl('/profile')

  }

  private handelError(error: any) {

  }
}
