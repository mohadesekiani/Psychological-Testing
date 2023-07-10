import { Component, ViewChild } from '@angular/core';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatInput } from '@angular/material/input';
import { FieldType } from '@ngx-formly/core';

import { MaterialPersianDateAdapter } from './jalaliDate/jalali_moment_date_adapter';
import { JALALI_MOMENT_FORMATS } from './jalaliDate/jalali_moment_formats';

@Component({
  selector: 'app-datepicker',
  template: `

<mat-form-field class="mat-form-field w-full">
  <input
  matInput
  [matDatepicker]="picker"
  [formControl]="formControl"
  [formlyAttributes]="field"
  class="mat-input"
  >
  <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
  <mat-datepicker #picker></mat-datepicker>
</mat-form-field>
`,
providers:[
  {
    provide:DateAdapter,
    useClass:MaterialPersianDateAdapter,
    deps:[MAT_DATE_LOCALE]
  },
  {provide:MAT_DATE_FORMATS , useValue:JALALI_MOMENT_FORMATS},
  { provide: MAT_DATE_LOCALE, useValue: 'fa-IR' }

],


})
export class DatepickerTypeComponent extends FieldType<any> {
  @ViewChild(MatInput) formFieldControl: MatInput;

}
