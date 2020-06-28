import { Component, OnInit } from '@angular/core';
import {UserService, User} from '../../Services/Data/user.service';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User;
  router: Router;
  http: HttpClient;

  constructor(private dataUser: UserService) {
  }

  ngOnInit(): void {
    // this.http.get(`http://127.0.0.1:8000/api/info`).subscribe((data: any[]) => {
      // @ts-ignore
      this.dataUser = data;
    }// );
}

  // onSelect(data) {
    // console.log(data);
    // this.dataUser = data;


  // }
// }
