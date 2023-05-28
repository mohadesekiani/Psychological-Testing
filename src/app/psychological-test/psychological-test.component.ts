import { Component } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { PsychologicalTests } from '../core/services/data/mock-data';
// import { ActivatedRoute } from '@angular/router';
 import { IPsychological } from '../core/shema/models/Ipsychological'
@Component({
  selector: 'app-psychological-test',
  templateUrl: './psychological-test.component.html',
  styleUrls: ['./psychological-test.component.scss']
})
export class PsychologicalTestComponent {

  constructor( private router:Router,private route:ActivatedRoute){}
  testId :number
  foundItem:any

  // selectedId:number;
  // selectedTest?:IPsychological;
   PsychologicalTests:IPsychological[]=PsychologicalTests
ngOnInit(): void {

    //this.selectedId  = +this.route.snapshot.params['id'];
    //const queryParams = this.route.snapshot.queryParams;
   // console.log(this.selectedId);
    // this.selectedTest = this.PsychologicalTests.find(test => test.id === this.selectedId)
    this.testId = this.route.snapshot.params['id'];
      this.foundItem = PsychologicalTests.find(item => item.id ==  this.testId);
      console.log(this.testId,this.foundItem);
      if(!this.foundItem){
        this.router.navigate(['/psychologicalTest/notItem']);
      }

  }
}
