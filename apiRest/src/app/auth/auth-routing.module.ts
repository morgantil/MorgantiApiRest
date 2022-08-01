import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PersonajeComponent } from '../components/personaje/personaje.component';
import { LoginComponent } from '../components/login/login.component';

const routes:Routes=[
  {
    path:'',
    children:[
      {path:'personaje',component:PersonajeComponent},
      {path:'login',component:LoginComponent},
      {path:'**',redirectTo:'login'},
    ]

  }
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class AuthRoutingModule { }
