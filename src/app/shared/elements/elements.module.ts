import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';

import { MaterialModule } from './material/material.module';

const SHARED_MODULES = [
  MaterialModule,
  FormlyMaterialModule,
  FormsModule,
  ReactiveFormsModule
];
@NgModule({
  exports:[...SHARED_MODULES,FormlyModule],
  declarations: [],
  imports: [
    ...SHARED_MODULES,
    FormlyModule.forRoot(),

  ]
})
export class ElementsModule { }
