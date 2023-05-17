import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  RouterModule } from '@angular/router';
import { LayoutModule } from './layout/layout.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { PsychologicalTestComponent } from './psychological-test/psychological-test.component';
import { MaterialModule } from './shared/elements/material/material.module';
@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    PsychologicalTestComponent,
    
  ],
  imports: [
    LayoutModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
