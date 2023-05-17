import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPsychological } from '../core/shema/models/Ipsychological'
@Component({
  selector: 'app-psychological-test',
  templateUrl: './psychological-test.component.html',
  styleUrls: ['./psychological-test.component.scss']
})
export class PsychologicalTestComponent {

  constructor(private route:ActivatedRoute){}

  selectedId:number;
  selectedTest?:IPsychological;
  PsychologicalTests:IPsychological[]=[
  {  
    id:1,
    question:["سوال 1","سوال 2"],
    title:"تست هوش ",
  },
  { 
     id:2,
    question:["سوال 1","سوال 2"],
    title:"تست هوش ",
  },
  { 
     id:3,
    question:["سوال 1","سوال 2"],
    title:"تست هوش ",
  }
]
ngOnInit(): void {

    this.selectedId  = +this.route.snapshot.params['id'];
    //const queryParams = this.route.snapshot.queryParams;
    console.log(this.selectedId);
    this.selectedTest = this.PsychologicalTests.find(test => test.id === this.selectedId)


  }
}
