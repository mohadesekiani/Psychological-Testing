import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 import { LoginComponent } from './components/login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { ReactiveFormsModule } from '@angular/forms';
import {  RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [ 
    AuthComponent,
     LoginComponent,
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
