import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoGuard } from './auto.guard';



const routes: Routes = [
  {path:'auth',
  loadChildren: () => import('./app.module').then(m=>m.AppModule),
  canActivate:[AutoGuard]
 
}
 
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
