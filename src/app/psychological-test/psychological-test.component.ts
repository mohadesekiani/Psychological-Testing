import { Component } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';

import { PsychologicalTests } from '../core/services/data/mock-data';
import { IPsychological } from '../core/shema/models/Ipsychological';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core/public_api';
// import { ActivatedRoute } from '@angular/router';
import { FakeDataService } from '../core/services/data/fake-data.service';

@Component({
  selector: 'app-psychological-test',
  templateUrl: './psychological-test.component.html',
  styleUrls: ['./psychological-test.component.scss']
})
export class PsychologicalTestComponent {
  testId :number
  test:IPsychological
  form = new FormGroup({});

  fields: FormlyFieldConfig[] = [];
  questionForm: FormGroup;
 model: any = {};
 options: FormlyFormOptions = {};
 PsychologicalTests:IPsychological[]

 questions: string[] 
  constructor( private route:ActivatedRoute,private FakeDataService:FakeDataService){
   this.PsychologicalTests = FakeDataService.getFakedata()
   
    this.questionForm = new FormGroup({});
    this.generateFields();
  }


  ngOnInit(): void {
    
   this.route.data.subscribe((data:Data)=>{
     this.test = data['test']
     
   })
   console.log(this.route,"---------------",this.test);

 }

generateFields() {
  for (let i = 1; i <= this.questions.length; i++) {
    const questionKey = `question${i}`;
    const previousQuestionKey = `question${i - 1}` as keyof typeof this.model;

    const field: FormlyFieldConfig = {
      key: questionKey,
      type: 'radio',
      templateOptions: {
        label: `سوال ${i}:`,
        required: true,
        options: [
          { value: 'option1', label: 'گزینه 1' },
          { value: 'option2', label: 'گزینه 2' },
          { value: 'option3', label: 'گزینه 3' },
          { value: 'option4', label: 'گزینه 4' },
        ],
      },
      expressionProperties: {
        'templateOptions.disabled': (model: any, formState: any) => {
          if (i === 1) {
            return false; // سوال اول فعال باشد
          }
          return !model[previousQuestionKey];
        },
      },
    };

    this.fields.push(field);
  }
}

 }


