import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  // imports: [
  //   CommonModule,
  //   MatToolbarModule,
  //   MatGridListModule,
  //   MatIconModule,
  //   MatSidenavModule,
  //   MatListModule,
  //   MatCardModule,
  //   MatSnackBarModule,
  //   MatFormFieldModule,
  //   MatDatepickerModule,
  //   MatNativeDateModule,
  //   MatInputModule
  //     ],
  exports: [
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
  ],
  declarations: [],
})
export class MaterialModule {}
