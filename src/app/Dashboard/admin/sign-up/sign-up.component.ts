import { adminService } from './../../../services/admins.service';

import { from } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  adminForm:FormGroup;
  admin:any={};

  constructor( private formBuilder:FormBuilder,
               private adminService:adminService,
               
    ) { }

  ngOnInit(): void {
    this.adminForm=this.formBuilder.group({
      fullName:['', Validators.minLength(5)],
      emailAdmin:['',[ Validators.email, Validators.required]],
      userAdmin:['', Validators.minLength(4)],
      pwdAdmin:['', Validators.required],
      confPwdAdmin:['',Validators.minLength(8)]},


    );


  }


  signUpAdmin(){
    console.log('this is admin', this.adminForm.value);
    
    this.adminService.addAdmin(this.adminForm.value).subscribe(
      (data)=>{
        console.log('service called:', data);
        
    
    })
    

  }

}
