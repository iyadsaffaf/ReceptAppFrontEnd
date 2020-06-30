import { Component, OnInit } from '@angular/core';
import {User, UserService} from "../../Services/Data/user.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public user:User;
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.currentData.subscribe(data=>this.user=data)

  }

}
