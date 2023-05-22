import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SharedModule } from './shared/shared.module';

// import { LayoutModule } from './layout/layout.module';
// import { AuthModule } from './auth/auth.module';
//import { PsychologicalTestComponent } from './psychological-test/psychological-test.component';
// import { AuthComponent } from './auth/auth.component';
// import { LoginComponent } from './auth/components/login/login.component';
// import { SighnupComponent } from './auth/components/sighnup/sighnup.component';
// import { FormlyModule } from '@ngx-formly/core';
//import { ReactiveFormsModule } from '@angular/forms';
// import { FormlyMaterialModule } from '@ngx-formly/material';
@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    //PsychologicalTestComponent,
    // AuthComponent,
    // LoginComponent,
    // SighnupComponent,

  ],
  imports: [
    //AuthModule,
    //LayoutModule,
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    //MaterialModule,
    //FormlyModule.forRoot(),
    //ReactiveFormsModule,
    // FormlyMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
