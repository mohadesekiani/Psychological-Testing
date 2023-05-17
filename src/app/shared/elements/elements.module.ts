import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';


const SHARED_MODULES = [
  MaterialModule,
];
@NgModule({
  exports:[...SHARED_MODULES],
  declarations: [],
  imports: [
...SHARED_MODULES
  ]
})
export class ElementsModule { }
