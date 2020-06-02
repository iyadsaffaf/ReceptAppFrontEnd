import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RequestPassComponent } from './components/request-pass/request-pass.component';
import { ResponsePassComponent } from './components/response-pass/response-pass.component';
import { FavouriteComponent } from './components/favourite/favourite.component';
import {HttpClientModule} from "@angular/common/http";
import { AuthServiceService } from './Services/auth-service.service';
import { TokenService } from './Services/token.service';
import { AuthenticateService } from './Services/authenticate.service';
import { AfterLoginService } from './Services/after-login.service';
import { BeforeLoginService } from './Services/before-login.service';
import { MyReceptComponent } from './components/my-recept/my-recept.component';
import { HomeComponent } from './components/home/home.component';
import { ReceptDetailComponent } from './components/recept-detail/recept-detail.component';
import { NewReceptComponent } from './components/new-recept/new-recept.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    RequestPassComponent,
    ResponsePassComponent,
    FavouriteComponent,
    MyReceptComponent,
    HomeComponent,
    ReceptDetailComponent,
    NewReceptComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [AuthServiceService,TokenService,AuthenticateService,AfterLoginService,BeforeLoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
