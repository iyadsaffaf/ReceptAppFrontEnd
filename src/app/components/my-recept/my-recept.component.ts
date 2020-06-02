import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-my-recept',
  templateUrl: './my-recept.component.html',
  styleUrls: ['./my-recept.component.css']
})
export class MyReceptComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onClick(){
    this.router.navigateByUrl('/newrecept');
  }

}
