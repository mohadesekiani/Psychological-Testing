import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MAT_DATE_FORMATS, MatDateFormats } from '@angular/material/core';
import { Router } from '@angular/router';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core/public_api';
import { FakeDataService } from 'src/app/core/services/data/fake-data.service';
import { NotificationService } from 'src/app/core/services/utils/notification.service';

const PERSIAN_DATE_FORMATS: MatDateFormats = {
  parse: {
    dateInput: 'jYYYY/jMM/jDD',
  },
  display: {
    dateInput: 'jYYYY/jMM/jDD',
    monthYearLabel: 'jYYYY jMMMM',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'jYYYY jMMMM',
  },
};
@Component({
  selector: 'app-sighnup',
  templateUrl: './sighnup.component.html',
  styleUrls: ['./sighnup.component.scss']
})
export class SighnupComponent {

  constructor(private fakeDataService: FakeDataService,
    private notificationService: NotificationService,
    private router: Router
    ) {}

  form = new FormGroup({});
  model = { username: '', password: '',birthDate:'' };
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'username',
      type: 'input',
      templateOptions: {
        label: 'نام کاربری',
        placeholder: 'لطفا نام کاربری خود را وارد کنید',
        required: true,
        validation:{
          messages:{
            required: 'وارد کردن نام کاربری الزامی است.'


          }
        }
      }
    },
    {
      key: 'password',
      type: 'input',
      templateOptions: {
        label: 'رمز ورود',
        placeholder: 'لطفا رمز ورود خود را وارد کنید',
        required: true,
        type: 'password',
        validation:{
          messages:{
            required: 'وارد کردن رمز ورود الزامی است.'

          }
        }
      }
    },
    {
      key: 'birthdate',
      type: 'datepicker',
      templateOptions: {
        label: 'تاریخ تولد',
        placeholder: 'لطفا تاریخ تولد خود را انتخاب کنید',
        required: true,
        // تنظیمات تاریخ تولد
        datepickerOptions: {
          format: 'YYYY/MM/DD',
          formatMoment: 'jYYYY/jMM/jDD',
          useUtc: true,
          matDatepicker: {
            appearance: 'fill',
          },
          MAT_DATE_FORMATS: PERSIAN_DATE_FORMATS,
        },
      },
      validators: {
        validation: ['required'],
      },
      validation: {
        messages: {
          required: 'وارد کردن تاریخ تولد الزامی است.',
        },
      },
    },

  ];
  onSubmit() {
    if (this.form.valid) {

      if(this.fakeDataService.login(this.model)){
       this.notificationService.openSuccess('خوش امدید')
       this.router.navigate(['/']);

      }else{
        this.notificationService.openDanger("این کاربر ثبت نام نشده است...")

      }

    } else {
      // console.log('Form Invalid!');
    }
  }

}
