import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';

import { DatepickerComponent } from './components/form/datepicker/datepicker.component';
import { MaterialModule } from './material/material.module';

const SHARED_MODULES = [
  MaterialModule,
  FormlyMaterialModule,
  FormsModule,
  ReactiveFormsModule
];
@NgModule({
  exports:[...SHARED_MODULES,FormlyModule],
  declarations: [DatepickerComponent],
  imports: [
    ...SHARED_MODULES,
    FormlyModule.forRoot(
      {
        validationMessages:[{
          name:'required',
          message:'پر کردن این فیلد الزامی است'
        }],
        types: [
          { name: 'datepicker', component: DatepickerComponent },
        ],
      }
    ),

  ]
})
export class ElementsModule { }
