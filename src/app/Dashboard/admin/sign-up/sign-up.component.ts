import { Router } from '@angular/router';
import { adminService } from './../../../services/admins.service';

import { from } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';




@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  adminForm: FormGroup;
  admin: any = {};

  constructor(private formBuilder: FormBuilder,
    private adminService: adminService,
    private router: Router,
    private toastr: ToastrService


  ) { }

  ngOnInit(): void {
    this.adminForm = this.formBuilder.group({
      fullName: ['', Validators.minLength(5)],
      emailAdmin: ['', [Validators.email, Validators.required]],
      userAdmin: ['', Validators.minLength(4)],
      pwdAdmin: ['', Validators.required],
      confPwdAdmin: ['', Validators.minLength(8)]
    }

    );


    let isLoggedIn = this.adminService.isLoggedIn();
    if (isLoggedIn) {
      this.router.navigate(['admin'])
    }


  }


  signUpAdmin() {
    console.log('this is admin', this.adminForm.value);

    this.adminService.addAdmin(this.adminForm.value).subscribe(
      (data) => {
        this.router.navigate(['login-admin']);
        this.toastr.success('Admin registred succesuflly');

      })


  }

}
