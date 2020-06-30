import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {DataService, Recept } from '../../Services/data.service';


@Component({
  selector: 'app-my-recept',
  templateUrl: './my-recept.component.html',
  styleUrls: ['./my-recept.component.css']
})
export class MyReceptComponent implements OnInit {
  private recept: Recept;
  recepts = [];

  constructor(private router: Router,
              private http: HttpClient,
              private dataService: DataService) {
  }

  ngOnInit(): void {
    this.http.get(`http://127.0.0.1:8000/api/recept`).subscribe((data: any[]) => {
      //  console.log(data);

      this.recepts = data;
    });

  }
  onClick()
  {
    this.router.navigateByUrl('/newrecept');
  }

  onSelect(data){
    console.log(data);
    this.recept = data;
    this.dataService.currentData.subscribe(data => this.recept = data);
    this.dataService.changeData(data);
    this.router.navigateByUrl('/receptdetail');

  }
}
