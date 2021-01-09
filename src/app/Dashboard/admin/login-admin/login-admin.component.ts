import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { Router } from '@angular/router';
import { adminService } from './../../../services/admins.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {
  loginAdmins: FormGroup;
  admin: any = {}
  data: any;


  constructor(private formBuilder: FormBuilder,
    private adminService: adminService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.loginAdmins = this.formBuilder.group({
      emailLoginAdmin: ['', [Validators.email, Validators.required]],
      pwdLoginAdmin: ['', Validators.required]
    })

    let isLoggedIn = this.adminService.isLoggedIn();
    if (isLoggedIn) {
      this.router.navigate(['admin'])
    }




  }

  loginAdmin() {

    this.adminService.loginAdmin(this.loginAdmins.value).subscribe(
      data => {

        if (data.message == '1') {

          localStorage.setItem('token', JSON.stringify(data.token))
          this.router.navigate(['admin']);
          this.toastr.success('Admin added successfuly');
          console.log(data);

        }
        else {
          // document.getElementById('error').innerHTML = '<div class="alert alert-danger" role="alert">' + 'Email / Password incorrect' + '</div>'
          this.toastr.error(data.message);
        }


      }
    )
  }
  /*loginAdmin(){
    if(this.loginAdmins.valid){
      this.adminService.loginAdmin(this.loginAdmins.value).subscribe(
        data=>{
          console.log(' data Admin',data);
        
          localStorage.setItem('token', data.toString())
          this.router.navigate(['admin'])
          this.toastr.success('Admin added successfuly');
          
        }
         
      )
      else {
        document.getElementById('error').innerHTML = '<div class="alert alert-danger" role="alert">' + 'Email / Password incorrect' + '</div>'
  
      }
    }

  }*/

}
