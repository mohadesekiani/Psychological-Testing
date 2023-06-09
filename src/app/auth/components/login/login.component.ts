import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {
  FormlyFieldConfig,
  FormlyFormOptions,
} from '@ngx-formly/core/public_api';
import { ABDataService } from 'src/app/core/services/data/abstract-data.service';
import { NotificationService } from 'src/app/core/services/utils/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(
    // TODO: same operate on otheer fake data services.
    private dataService: ABDataService,
    private notificationService: NotificationService,
    private router: Router
  ) {}

  form = new FormGroup({});
  model = { username: '', password: '' };
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'username',
      type: 'input',
      templateOptions: {
        label: 'نام کاربری',
        placeholder: 'لطفا نام کاربری خود را وارد کنید',
        required: true,
        validation: {
          messages: {
            required: 'وارد کردن نام کاربری الزامی است.',
          },
        },
      },
    },
    {
      key: 'password',
      type: 'input',
      templateOptions: {
        label: 'رمز ورود',
        placeholder: 'لطفا رمز ورود خود را وارد کنید',
        required: true,
        type: 'password',
        validation: {
          messages: {
            required: 'وارد کردن رمز ورود الزامی است.',
          },
        },
      },
    },
  ];
  onSubmit() {
    if (this.form.valid) {
      if (this.dataService.login(this.model)) {
        this.notificationService.openSuccess('خوش امدید');
        this.router.navigate(['/']);
      } else {
        this.notificationService.openDanger('این کاربر ثبت نام نشده است...');
      }
    } else {
      // console.log('Form Invalid!');
    }
  }
}
