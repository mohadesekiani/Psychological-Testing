import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { PsychologicalTestComponent } from '../psychological-test/PsychologicalTestComponent';
import { SharedModule } from '../shared/shared.module';
import { FooterComponent } from './components/footer/footer.component';
import { LoadingComponent } from './components/loading/loading.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';

@NgModule({
  declarations: [
    LoadingComponent,
    NotFoundComponent,
    LayoutComponent,
    HomeComponent,
    SidebarComponent,
    FooterComponent,
    LayoutComponent,
    PsychologicalTestComponent,
  ],
  imports: [CommonModule, LayoutRoutingModule, SharedModule, RouterModule],
})
export class LayoutModule {}
