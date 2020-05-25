import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RequestPassComponent } from './components/request-pass/request-pass.component';
import { ResponsePassComponent } from './components/response-pass/response-pass.component';
import { FavouriteComponent } from './components/favourite/favourite.component';


const routes: Routes = [
{
  path:'login',
  component:LoginComponent
},
{
  path:'singup',
  component:SignupComponent
},
{
  path:'profile',
  component:ProfileComponent
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
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
