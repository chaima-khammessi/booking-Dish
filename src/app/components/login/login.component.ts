import { UsersService } from './../../services/users.service';
import { Router } from '@angular/router';
import { LoginService } from './../../services/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  logins:any={};
  isInvalid:boolean=false;

  constructor(private usersService:UsersService,
    private router:Router,
    private formBuilder:FormBuilder) { }

  ngOnInit(): void {
      this.loginForm=this.formBuilder.group({
        emailLogin:['',[Validators.email, Validators.required]],
        pswLogin:['', Validators.required]

      })

  }
  /*login(){
    this.usersService.login(this.loginForm.value).subscribe(
      data=>{
        if(data.message =='2'){
          this.router.navigate(['/contact']);
        }
        else{
          this.isInvalid=true
        }

      
    }

    )

  }*/



  login(){
    this.usersService.login(this.loginForm.value).subscribe(
      data=>{
        if(data.message =='2'){
          this.router.navigate(['/contact']);
        }
        else{
          this.isInvalid=true
        }

      
    },
    err=>{
      console.dir(err)
    }

    )

  }


}
