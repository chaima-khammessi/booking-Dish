import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BmiComponent implements OnInit {

 weight:number;
 height:number;
 res : boolean = false;
 result : any ;
 rest:any;
  constructor() { }

  ngOnInit(): void {
  }


  calBmi()
  {

    
   
   this.result = this.weight/Math.pow(this.height,2);
   
 
  }



}
