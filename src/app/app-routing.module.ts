import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AuthComponent } from './auth/auth.component';
// import { LoginComponent } from './auth/components/login/login.component';
// import { HomeComponent } from './home/home.component';
// import { LayoutComponent } from './layout/layout.component';
// import { NotFoundComponent } from './not-found/not-found.component';
// import { PsychologicalTestComponent } from './psychological-test/psychological-test.component';

const routes: Routes = [

  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./layout/layout.module').then((m) => m.LayoutModule),
  },

  //اینو حتما باید اخرین مورد بنویسید
  // {path:'not_found', component:NotFoundComponent},
  // {path: '**',redirectTo: 'not_found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
