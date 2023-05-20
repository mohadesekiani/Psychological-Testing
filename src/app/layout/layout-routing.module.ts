import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { PsychologicalTestComponent } from '../psychological-test/psychological-test.component';
import { LayoutComponent } from './layout.component';

const routes: Routes = [

  { path:'',component:LayoutComponent ,
  children:[
  { path: '', component: HomeComponent },
  { path: 'psychologicalTest/:id', component: PsychologicalTestComponent },

  
  
  ]
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
