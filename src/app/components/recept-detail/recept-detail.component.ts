import { Component, OnInit } from '@angular/core';
import {DataService, Recept} from "../../Services/data.service";

@Component({
  selector: 'app-recept-detail',
  templateUrl: './recept-detail.component.html',
  styleUrls: ['./recept-detail.component.css']
})
export class ReceptDetailComponent implements OnInit {
   recept:Recept;
  constructor(private dataService:DataService) { }

  ngOnInit(): void {

    this.dataService.currentData.subscribe(data=>this.recept=data)


  }

}


