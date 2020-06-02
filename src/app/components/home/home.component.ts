import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {DataService} from "../../Services/data.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items = [];
  daterecept={};

  constructor(private http:HttpClient,
              private router:Router,
              private datas:DataService
              ) { }

  ngOnInit(): void {



    this.http.get(`http://127.0.0.1:8000/api/recept`).subscribe((data: any[])=>{
      console.log(data);
      this.daterecept=data;
      this.items = data;
    })


  }
  onSelect(data){
    console.log(data);
    this.datas.currentData.subscribe(data=>this.daterecept=data)
    this.datas.changeData(data);
    this.router.navigateByUrl('/receptdetail')

  }

}
