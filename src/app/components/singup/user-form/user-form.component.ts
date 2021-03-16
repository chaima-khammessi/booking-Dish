import { Router } from '@angular/router';
import { MustMatch } from '../../../validators/mustMatchValidators';

import { UsersService } from './../../../services/users.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  @Input('userType') userType: string;
  usersForm: FormGroup;
  form: FormGroup;


  constructor(
    private usersService: UsersService,
    private router: Router,
    private toastr: ToastrService

  ) { }

  ngOnInit(): void {
    console.log('userType', this.userType);

    // Validator input user-Form

    this.usersForm = new FormGroup({
      fName: new FormControl('', Validators.minLength(3)),
      lName: new FormControl('', Validators.minLength(5)),
      adress: new FormControl('', Validators.minLength(20)),
      email: new FormControl('', [Validators.email, Validators.required]),
      pwd: new FormControl('', Validators.required),
      confPwd: new FormControl('', Validators.required),
      tel: new FormControl('', [Validators.maxLength(8), Validators.minLength(8)]),
      mfCompany: new FormControl('', Validators.minLength(5)),
      faxCompany: new FormControl('', Validators.minLength(8)),
      domainCompany: new FormControl('', Validators.minLength(2)),
      expChef: new FormControl('', Validators.required),
      specialityChef: new FormControl('', Validators.required),
      userType: new FormControl(this.userType)

    },
    );

    this.userFormConstruction();

    let isLoggedIn = this.usersService.isLoggedIn();
    if (isLoggedIn) {
      this.router.navigate(['user'])
    }


  }





  userFormConstruction() {
    // Remove Input is not used in this form
    if (this.userType == 'consumer') {
      this.usersForm.removeControl('mfCompany');
      this.usersForm.removeControl('faxCompany');
      this.usersForm.removeControl('domainCompany');
      this.usersForm.removeControl('expChef');
      this.usersForm.removeControl('specialityChef');

    }
    else if (this.userType == 'company') {
      this.usersForm.removeControl('lName');
      this.usersForm.removeControl('expChef');
      this.usersForm.removeControl('specialityChef');

    }

    else if (this.userType == 'chef') {
      this.usersForm.removeControl('mfCompany');
      this.usersForm.removeControl('faxCompany');
      this.usersForm.removeControl('domainCompany');


    }
    this.usersForm.updateValueAndValidity();

  }

  get lName() {
    return this.usersForm.get('lName') as FormControl;
  }
  get fax() {
    return this.usersForm.get('faxCompany') as FormControl;
  }
  get mf() {
    return this.usersForm.get('mfCompany') as FormControl;
  }
  get domain() {
    return this.usersForm.get('domainCompany') as FormControl;
  }
  get specialite() {
    return this.usersForm.get('specialityChef') as FormControl;
  }
  get experience() {
    return this.usersForm.get('expChef') as FormControl;
  }




  signUpUser() {
    // add usersForm
    console.log('this is signUp user', this.usersForm.value);
    this.usersService.addUser(this.usersForm.value).subscribe(
      (data) => {
        this.router.navigate(['login']);
        this.toastr.success('User Registred Succesufully');


      })
  }


}
