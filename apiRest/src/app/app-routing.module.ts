import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PersonajeComponent } from './components/personaje/personaje.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'personaje',component:PersonajeComponent},
 
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
