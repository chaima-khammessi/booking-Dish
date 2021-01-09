
import { UsersService } from './../../services/users.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { style } from '@angular/animations';
import { ToastrService } from 'ngx-toastr';

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
    private formBuilder: FormBuilder,
    private toastr: ToastrService
    ) { }

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
   
        if (data.userType === 'consumer') {
          localStorage.setItem('token', JSON.stringify(data.token))
          this.router.navigate(['contact']);
          this.toastr.success(data.message);
          console.log(data);

        } else if (data.userType === 'chef') {
          localStorage.setItem('token', JSON.stringify(data.token))
          this.router.navigate(['chef']);
          this.toastr.success(data.message);
          console.log(data);
        } else if (data.userType === 'company') {
          localStorage.setItem('token', JSON.stringify(data.token))
          this.router.navigate(['dish']);
          this.toastr.success(data.message);
          console.log(data);

        } else {

         // document.getElementById('error').innerHTML = '<div class="alert alert-danger" role="alert">' + 'Email / Password incorrect' + '</div>'
         this.toastr.error(data.message);
        }
      }
    );

  }









}
