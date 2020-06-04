import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {DataService, Recept} from "../../Services/data.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private recept:Recept;
   recepts=[];


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
    console.log(data);
    this.recept=data;
    this.dataService.currentData.subscribe(data=>this.recept=data)
    this.dataService.changeData(data);
    this.router.navigateByUrl('/receptdetail')

  }

}
