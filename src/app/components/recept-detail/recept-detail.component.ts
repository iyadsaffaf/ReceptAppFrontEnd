import { Component, OnInit } from '@angular/core';
import {DataService} from "../../Services/data.service";

@Component({
  selector: 'app-recept-detail',
  templateUrl: './recept-detail.component.html',
  styleUrls: ['./recept-detail.component.css']
})
export class ReceptDetailComponent implements OnInit {
  daterecept={ };
  constructor(private datas:DataService) { }

  ngOnInit(): void {
    this.datas.currentData.subscribe(data=>this.daterecept=data)

  }

}
export class Recept {
  description: string
  id: number
  ingredients: string
  preparationtime: string
  tags: string

}

