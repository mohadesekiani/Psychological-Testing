import { Component,ViewChild } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { MatInput } from '@angular/material/input';


@Component({
  selector: 'app-datepicker',
  template: `

<mat-form-field class="w-full">

<input
      matInput
      (focus)="picker.open()"
      [formControl]="formControl"
      [matDatepicker]="picker"
      [matDatepickerFilter]="to.datepickerOptions.filter"
      [formlyAttributes]="field"
    />
    <ng-template #matSuffix>
      <mat-datepicker-toggle [for]="picker"></mat-datepicker-toggle>
    </ng-template>
    <mat-datepicker #picker></mat-datepicker>
  <mat-label>{{ to.label }}</mat-label>
  <mat-hint>{{ to.hint }}</mat-hint>
  <mat-error>
    <formly-validation-message [field]="field"></formly-validation-message>
  </mat-error>
</mat-form-field>


    
`,
})
export class DatepickerComponent extends FieldType<any> {
  @ViewChild(MatInput) formFieldControl: MatInput;
}
