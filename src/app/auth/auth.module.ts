import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './components/login/login.component';
import { SighnupComponent } from './components/sighnup/sighnup.component';

//import { ReactiveFormsModule } from '@angular/forms';
//import { MatSnackBarModule } from '@angular/material/snack-bar';
//import { FormlyModule } from '@ngx-formly/core';
//import { FormlyMaterialModule } from '@ngx-formly/material';
@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    SighnupComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    AuthRoutingModule,
    //FormlyModule.forRoot(),
    //FormlyMaterialModule,
   // ReactiveFormsModule,
    RouterModule,
    //MatSnackBarModule
  ]
})
export class AuthModule { }
