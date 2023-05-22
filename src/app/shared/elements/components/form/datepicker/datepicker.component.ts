import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';


@Component({
  selector: 'app-datepicker',
  template: `
    <input
      matInput
      (focus)="picker.open()"
      [formControl]="formControl"
      [matDatepicker]="picker"
      [formlyAttributes]="field"
    />
    <ng-template #matSuffix>
      <mat-datepicker-toggle [for]="picker"></mat-datepicker-toggle>
    </ng-template>
    <mat-datepicker #picker></mat-datepicker>
`,
})
export class DatepickerComponent extends FieldType<any> {
  constructor() {
    super();
  }
}
