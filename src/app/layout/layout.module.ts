import { Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { LayoutComponent } from './layout.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from '../home/home.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { PsychologicalTestComponent } from '../psychological-test/psychological-test.component';

import {  RouterModule } from '@angular/router';
import { NotFoundComponent } from '../not-found/not-found.component';

@NgModule({
  declarations: [NotFoundComponent,LayoutComponent,HomeComponent,SidebarComponent,FooterComponent,LayoutComponent,PsychologicalTestComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule,
    RouterModule,
  ],
})
export class LayoutModule { 

}
