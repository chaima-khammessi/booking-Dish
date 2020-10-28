import { UsersService } from './../../services/users.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {
  consumerForm:FormGroup;
  companyForm:FormGroup;
  chefForm:FormGroup;
  consumers:any={};
  companys:any={};
  chefs:any={};

  
  constructor(private formBuilder:FormBuilder,
    private usersService:UsersService ) { }

  ngOnInit(): void {
    this.consumerForm=this.formBuilder.group({
      fName:['', Validators.minLength(3)],
      lName:['',Validators.minLength(5)],
      adress:['',Validators.minLength(20)],
      email:['',[Validators.email, Validators.required]],
      pwd:['',Validators.required],
      confPwd:['', Validators.minLength(8)],
      tel:['',[ Validators.maxLength(8),Validators.minLength(8)]]
    })
    this.companyForm=this.formBuilder.group({
      nameCompany:['', Validators.minLength(3)],
      mfCompany:['', Validators.minLength(5)],
      adressCompany:['', Validators.minLength(10)],
      emailCompany:['',[Validators.email, Validators.required]],
      pwdCompany:['', Validators.required],
      confPwdCompany:['', Validators.minLength(8)],
      telCompany:['',[Validators.minLength(8), Validators.maxLength(8)]],
      faxCompany:['', Validators.minLength(8)],
      domainCompany:['', Validators.minLength(2)]
    })

    this.chefForm=this.formBuilder.group({
      firstNameChef:['',Validators.minLength(3)],
      lastNameChef:['',Validators.minLength(5)],
      adressChef:['', Validators.minLength(10)],
      emailChef:['',[Validators.email, Validators.required]],
      expChef:['', Validators.required],
      pwdChef:['', Validators.required],
      confPwdChef:['', Validators.minLength(8)],
      specialityChef:['',Validators.minLength(2)]
    })

    
  }


  signUpConsumer(){
    console.log('this is signUp consumer', this.consumerForm.value);
    this.usersService.addConsumer(this.consumerForm.value).subscribe(
      (data) =>{
        console.log('service call',data);
       
    })
  }
  signUpCompany(){
    console.log('this is signUp company', this.companyForm.value);
    this.usersService.addCompany(this.companyForm.value).subscribe(
      (dataCompany)=>{
        console.log('service call',dataCompany);
        
      }
    )
    
  }

  signUpChef(){
    console.log('this is signUp chef', this.chefForm.value);
    this.usersService.addChef(this.chefForm.value).subscribe(
      (dataChef)=>{
        console.log('service call', dataChef);
        
      }
    )
    
  }



}
