import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

@Component({
  selector: 'app-sighnup',
  templateUrl: './sighnup.component.html',
  styleUrls: ['./sighnup.component.scss']
})
export class SighnupComponent {

  form = new FormGroup({});
  model = { username: '', password: '',birthDate:'' };
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'birthDate',
      type: 'datepicker',
      templateOptions: {
        label: 'تاریخ تولد',

        placeholder: 'لطفا تاریخ تولد خود را وارد کنید',
        required: true,
        type:'date',
      },
    },
    {
      key: 'email',
      type: 'input',
      templateOptions: {
        label: 'ایمیل',
        placeholder: 'لطفا ایمیل خود را وارد کنید',
        required: true,
        type: 'email',
      },
    },
    {
      key: 'password',
      type: 'input',
      templateOptions: {
        label: 'رمز عبور',
        placeholder: 'لطفا رمز عبور خود را وارد کنید',
        required: true,
        type: 'password',
      },
    },

  ];
  onSubmit() {
    if (this.form.valid) {

  }

}
}
