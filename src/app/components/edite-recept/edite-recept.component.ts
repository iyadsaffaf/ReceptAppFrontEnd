import { Component, OnInit } from '@angular/core';
import {DataService, Recept} from "../../Services/data.service";
import {User, UserService} from "../../Services/Data/user.service";
import {UpUrl} from "../new-recept/new-recept.component";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-edite-recept',
  templateUrl: './edite-recept.component.html',
  styleUrls: ['./edite-recept.component.css']
})
export class EditeReceptComponent implements OnInit {
  oldrecept:Recept;

  public recept:Recept=new Recept();
  public  body;
  public url:UpUrl;
  public user:User;
  public imageurl;
  public withFoto:boolean;

  constructor(private dataService:DataService,private http:HttpClient,private userService:UserService  , private router:Router, ) { }
  private baseUrl='http://127.0.0.1:8000/api';
  selectedFile: File;

  ngOnInit(): void {
    this.dataService.currentData.subscribe(data=>this.oldrecept=data)
    this.userService.currentData.subscribe(data=>this.user=data)
     this.imageurl=this.oldrecept.url;
    this.withFoto=false;
  }

  onSubmit() {
    if(this.withFoto){
    this.http.post(`${this.baseUrl}/fileupload`,this.body).subscribe(
      data => this.handleResponseUpload(data),
      error=>this.handelError(error)

    );}else {
      this.http.put(`${this.baseUrl}/recept`+'/'+this.oldrecept.id,this.recept).subscribe(
        data => this.handleResponse(data),
        error=>this.handelError(error)

      );
      this.router.navigateByUrl('/myrecept')



    }

  }


  private handelError(error: any) {
    console.log(error);

  }

  private handleResponse(data) {

    console.log(data);

  }

  private handleResponseUpload(data) {
    this.url=data;
    this.recept.url=this.url.url;
    this.recept.user_id=this.user.id;
    this.http.put(`${this.baseUrl}/recept`+'/'+this.oldrecept.id,this.recept).subscribe(
      data => this.handleResponse(data),
      error=>this.handelError(error)

    );



  }

  onFileChanged(imageInput: any) {
    this.body= new FormData()
    const file: File = imageInput.files[0];
    this.body.append('photo',file);
    this.withFoto=true;

  }
}
