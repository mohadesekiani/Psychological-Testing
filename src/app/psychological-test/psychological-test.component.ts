import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Data, Router } from '@angular/router';
import {
  FormlyFieldConfig,
  FormlyFormOptions,
} from '@ngx-formly/core/public_api';
import { Observable } from 'rxjs';
import { FakeDataService } from 'src/app/core/services/data/fake-data.service';
import { canComponentDeactivate } from '../core/guards/deactivate.guard';

import { IPsychological } from '../core/shema/models/Ipsychological';
import { LoadingService } from './../core/services/loading/loading.service';

@Component({
  selector: 'app-psychological-test',
  templateUrl: './psychological-test.component.html',
  styleUrls: ['./psychological-test.component.scss'],
})
export class PsychologicalTestComponent implements canComponentDeactivate {
  score: any;
  show: boolean = false;
  testId: number;
  test: IPsychological;
  form = new FormGroup({});
  _id = this.route.snapshot.params['id'];
  fields: FormlyFieldConfig[] = [];
  questionForm: FormGroup;
  model: any = {};
  options: FormlyFormOptions = {};
  title: string;
  questions: Array<any>;

  constructor(
    private route: ActivatedRoute,
    private fakeDataService: FakeDataService,
    public loadingService: LoadingService,
    private router: Router
  ) {
    this.questionForm = new FormGroup({});
  }
  ngOnInit(): void {
    this.loadingService.showLoading();
    console.log('1');
    this.fakeDataService.getTestQuestionsById(this._id).subscribe({
      next: (res) => {
        this.title = res.title;
        // debugger;
        this.fillQuestionFields(res.questions);
        console.log('2');

        this.loadingService.hideLoading();
      },
      error: (err) => {
        console.log('3');

        this.loadingService.hideLoading();
      },
      complete: () => {
        console.log('4');
        this.loadingService.hideLoading();
      },
    });

    //resolve guard
    this.route.data.subscribe((data: Data) => {
      this.test = data['test'];
    });
  }

  fillQuestionFields(questions: Array<any>) {
    this.fields = questions.map((item, index) => {
      const questionKey = `question${index + 1}`;
      const previousQuestionKey = `question${index}`;
      return {
        key: questionKey,
        type: 'radio',
        props: {
          label: `سوال ${index + 1}: ${item.question}`,
          required: true,
          options: item.options,
        },

        //TODO: check later.
        // expressions: {
        //   disabled: `!${this.model[previousQuestionKey]} && model.key !== 'question1'`,
        // },
        expressionProperties: {
          'templateOptions.disabled': (model: any, formState: any) => {
            if (index === 0) return false; // سوال اول فعال باشد

            return !model[previousQuestionKey];
          },
        },
      };
    });
  }
  canDeactivate(): boolean | Observable<boolean> | Promise<boolean> {
    if (this.form.pristine || this.show) {
      return true;
    } else {
      return confirm(' آیا برای ترک صفحه مطمئن هستید؟اطلاعات ذخیره نشده است!');
    }
  }
  onCancel(): void {
    this.router.navigate(['/']);
  }
  onSubmit(): void {
    if (this.form.valid) {
      this.show = true;
      var randomNumber = Math.random();
      this.score = Math.floor(randomNumber * 100);
    }
  }
}
