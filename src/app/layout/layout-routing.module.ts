import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthenticationGuard } from '../core/guards/authentication.guard';
import { ResolveGuard } from '../core/guards/resolve.guard';
import { HomeComponent } from '../home/home.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { PsychologicalTestComponent } from '../psychological-test/psychological-test.component';
import { LayoutComponent } from './layout.component';

const routes: Routes = [

  { path:'',
  component:LayoutComponent,
  children:[
  { path: '', component: HomeComponent  ,canActivate:[AuthenticationGuard]},
  { path: 'psychologicalTest/:id', component: PsychologicalTestComponent,
  resolve:{test:ResolveGuard}
},
  { path: 'notItem', component: NotFoundComponent },


  ]
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
