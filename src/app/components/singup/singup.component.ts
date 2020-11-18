import { UsersService } from './../../services/users.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';




@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {
  usersForm: FormGroup;
  companyForm: FormGroup;
  chefForm: FormGroup;
  consumers: any = {};
  companys: any = {};
  chefs: any = {};



  constructor() { }

  ngOnInit(): void {



  }






}
