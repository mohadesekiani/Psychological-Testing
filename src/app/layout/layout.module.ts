import { Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { LayoutComponent } from './layout.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from '../home/home.component';

import {  RouterModule } from '@angular/router';


@NgModule({
  declarations: [HomeComponent,SidebarComponent,FooterComponent,LayoutComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ]
})
export class LayoutModule { 

}
