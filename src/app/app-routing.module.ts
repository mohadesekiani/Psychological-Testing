import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PsychologicalTestComponent } from './psychological-test/psychological-test.component';

const routes: Routes = [
  { path:'',component:LayoutComponent ,
    children:[
    { path: '', component: HomeComponent },
    { path: 'psychologicalTest/:id', component: PsychologicalTestComponent },


    
    
    ]
  },


  //اینو حتما باید اخرین مورد بنویسید
  {path:'not_found', component:NotFoundComponent},
  {path: '**',redirectTo: 'not_found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
