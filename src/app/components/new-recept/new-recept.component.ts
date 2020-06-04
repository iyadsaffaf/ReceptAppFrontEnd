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
  constructor(private http:HttpClient) { }
  private baseUrl='http://127.0.0.1:8000/api';
  selectedFile: File;

  ngOnInit(): void {
  }

  onSubmit() {
    this.recept.url="Ff";
    this.recept.user_id="Ff";
    this.http.post(`${this.baseUrl}/receptsave`,this.recept).subscribe(
      data => this.handleResponse(data),
      error=>this.handelError(error)

    );


  }

  private handelError(error: any) {
    console.log(error);

  }

  private handleResponse(data: Object) {
    console.log(data);
  }

  onFileChanged(imageInput: any) {
    const file: File = imageInput.files[0];
    console.log(file.name)


  }
}
