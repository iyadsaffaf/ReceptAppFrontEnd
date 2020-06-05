import { Component, OnInit } from '@angular/core';
import {Recept} from "../../Services/data.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-new-recept',
  templateUrl: './new-recept.component.html',
  styleUrls: ['./new-recept.component.css']
})
export class NewReceptComponent implements OnInit {
  public recept:Recept=new Recept();
  public  body;
  public url:UpUrl;


  constructor(private http:HttpClient) { }
  private baseUrl='http://127.0.0.1:8000/api';
  selectedFile: File;

  ngOnInit(): void {
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

    this.recept.user_id="5555";
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


