
import { UsersService } from './../../services/users.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { style } from '@angular/animations';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input('userType') userType: string;
  loginForm: FormGroup;
  logins: any = {};
  isInvalid: boolean = false;
  user: any;



  constructor(private usersService: UsersService,
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // Validator Input Login
    this.loginForm = this.formBuilder.group({
      emailLogin: ['', [Validators.email, Validators.required]],
      pswLogin: ['', Validators.required]

    })
  }

  login(loginUser) {
    // searsh if userType== true 
    this.usersService.login(loginUser).subscribe(
      data => {
        console.log('data from login', data);
        if (data.userType === 'consumer') {
          this.router.navigate(['contact']);
        } else if (data.userType === 'chef') {
          this.router.navigate(['chef']);
        } else if (data.userType === 'company') {
          this.router.navigate(['dish']);
        } else {

          document.getElementById('error').innerHTML = '<div class="alert alert-danger" role="alert">' + 'Email / Password incorrect' + '</div>'

        }
      }
    );

  }









}
