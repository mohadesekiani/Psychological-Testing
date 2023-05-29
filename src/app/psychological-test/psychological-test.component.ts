import { Component } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';

import { PsychologicalTests } from '../core/services/data/mock-data';
import { IPsychological } from '../core/shema/models/Ipsychological';

// import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-psychological-test',
  templateUrl: './psychological-test.component.html',
  styleUrls: ['./psychological-test.component.scss']
})
export class PsychologicalTestComponent {

  constructor( private route:ActivatedRoute){}
  testId :number
  test:IPsychological

  // selectedId:number;
  // selectedTest?:IPsychological;
   PsychologicalTests:IPsychological[]=PsychologicalTests
ngOnInit(): void {

    //this.selectedId  = +this.route.snapshot.params['id'];
    //const queryParams = this.route.snapshot.queryParams;
   // console.log(this.selectedId);
    // this.selectedTest = this.PsychologicalTests.find(test => test.id === this.selectedId)

    // this.testId = +this.route.snapshot.params['id'];
    //   this.test = PsychologicalTests.find(item => item.id ==  this.testId);
    //   console.log(this.testId,this.test);
    //   if(!this.test){
    //     this.router.navigate(['/psychologicalTest/notItem']);
    //   }
    
    this.route.data.subscribe((data:Data)=>{
      this.test = data['test']
      
    })
    console.log(this.route,"---------------",this.test);

  }
}
