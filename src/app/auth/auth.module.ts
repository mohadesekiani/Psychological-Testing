import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterModule } from '@angular/router';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './components/login/login.component';
import { SighnupComponent } from './components/sighnup/sighnup.component';

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    SighnupComponent,
  ],
  imports: [

    CommonModule,
    AuthRoutingModule,
    FormlyModule.forRoot(),
    FormlyMaterialModule,
    ReactiveFormsModule,
    RouterModule,
    MatSnackBarModule
  ]
})
export class AuthModule { }
