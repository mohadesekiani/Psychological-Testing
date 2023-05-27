import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthenticationGuard } from '../core/guards/authentication.guard';
import { ResolveGuard } from '../core/guards/resolve.guard';
import { HomeComponent } from '../home/home.component';
import { PsychologicalTestComponent } from '../psychological-test/psychological-test.component';
import { LayoutComponent } from './layout.component';

const routes: Routes = [

  { path:'',component:LayoutComponent ,canActivate:[AuthenticationGuard],
  children:[
  { path: '', component: HomeComponent },
  { path: 'psychologicalTest/:id', component: PsychologicalTestComponent,canActivate:[ResolveGuard]},


  ]
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
