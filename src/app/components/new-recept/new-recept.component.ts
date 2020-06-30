import { Component, OnInit } from '@angular/core';
import {Recept} from "../../Services/data.service";
import {HttpClient} from "@angular/common/http";
import {User, UserService} from "../../Services/Data/user.service";

@Component({
  selector: 'app-new-recept',
  templateUrl: './new-recept.component.html',
  styleUrls: ['./new-recept.component.css']
})
export class NewReceptComponent implements OnInit {
  public recept:Recept=new Recept();
  public  body;
  public url:UpUrl;

  public user:User;

  constructor(private http:HttpClient,private userService:UserService ) { }
  private baseUrl='http://127.0.0.1:8000/api';
  selectedFile: File;

  ngOnInit(): void {
    this.userService.currentData.subscribe(data=>this.user=data)

  }

  onSubmit() {
  // get image url
    this.http.post(`${this.baseUrl}/fileupload`,this.body).subscribe(
      data => this.handleResponseUpload(data),
      error=>this.handelError(error)

    );




  }

  private handelError(error: any) {
    console.log(error);

  }

  private handleResponse(data) {

    console.log(data);

  }

  private handleResponseUpload(data) {
    this.url=data;
   console.log(this.recept.url+"fgdgfgf");
    console.log(data+"fgdjnlgfgf");

    this.recept.url=this.url.url;

    this.recept.user_id=this.user.id;
    this.http.post(`${this.baseUrl}/receptsave`,this.recept).subscribe(
      data => this.handleResponse(data),
      error=>this.handelError(error)

    );



  }

  onFileChanged(imageInput: any) {
    this.body= new FormData()
    const file: File = imageInput.files[0];
    this.body.append('photo',file);

  }
}
export class UpUrl{
  url: string

}


