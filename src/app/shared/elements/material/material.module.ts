import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'
import {MatGridListModule} from '@angular/material/grid-list'
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list'; 
import {MatCardModule} from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatGridListModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatSnackBarModule
      ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatSnackBarModule
  ],
  declarations: [],
})
export class MaterialModule { }
