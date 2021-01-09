import { Router } from '@angular/router';
import { adminService } from './../../../services/admins.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

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
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginAdmins = this.formBuilder.group({
      emailLoginAdmin: ['', [Validators.email, Validators.required]],
      pwdLoginAdmin: ['', Validators.required]
    })




  }

  loginAdmin() {

    this.adminService.loginAdmin(this.loginAdmins.value).subscribe(
      data => {

        if (data.message == '1') {
          this.router.navigate(['admin']);
        }
        else {
          document.getElementById('error').innerHTML = '<div class="alert alert-danger" role="alert">' + 'Email / Password incorrect' + '</div>'

        }


      }
    )
  }

}
