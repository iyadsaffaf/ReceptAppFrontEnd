import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RequestPassComponent } from './components/request-pass/request-pass.component';
import { ResponsePassComponent } from './components/response-pass/response-pass.component';
import { FavouriteComponent } from './components/favourite/favourite.component';
import { BeforeLoginService } from './Services/before-login.service';
import { AfterLoginService } from './Services/after-login.service';
import {HomeComponent} from "./components/home/home.component";
import {ReceptDetailComponent} from "./components/recept-detail/recept-detail.component";
import {MyReceptComponent} from "./components/my-recept/my-recept.component";
import {NewReceptComponent} from "./components/new-recept/new-recept.component";
import {EditeReceptComponent} from "./components/edite-recept/edite-recept.component";


const routes: Routes = [
{
  path:'login',
  component:LoginComponent,
  canActivate: [BeforeLoginService]
},
{
  path:'signup',
  component:SignupComponent,
  canActivate: [BeforeLoginService]
},
{
  path:'profile',
  component:ProfileComponent,


},
{
  path:'reset-pass',
  component:RequestPassComponent
},
{
  path:'response-pass',
  component:ResponsePassComponent
},

{
  path:'favourite',
  component:FavouriteComponent
},
  {
    path:'myrecept',
    component:MyReceptComponent
  }
  ,
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'receptdetail',
    component:ReceptDetailComponent
  },
  {
    path:'newrecept',
    component:NewReceptComponent
  }
  ,
  {
    path:'editerecept',
    component:EditeReceptComponent
  }









];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
