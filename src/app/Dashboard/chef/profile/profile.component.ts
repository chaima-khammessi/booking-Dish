import { ToastrService } from 'ngx-toastr';
import { TableComponent } from './../table/table.component';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ChefsService } from './../../../services/chefs.service';
import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  id: any;
  user: any = {};
  imagePreview: string = "../../../../assets/img/avatar.jpg";
  userForm: FormGroup;
  // values=[];


  constructor(private userService: UsersService,
    private router: Router,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    const userId = JSON.parse(localStorage.getItem('userId'));
    //this.id = this.activateRoute.snapshot.paramMap.get('id');
    this.userService.getByIdUser(userId).subscribe(
      data => {
        console.log('this is all Data for User', data);
        this.user = data.users
        console.log('this is Use  by id', this.user);


      },
      err => {
        console.log(err);

      }
    )

    this.userForm = this.formBuilder.group({
      fName: [''],
      lName: [''],
      tel: [''],
      email: [''],
      adress: [''],
      specialityChef: [''],
      expChef: [''],
      img: [''],
      nationality: [''],
      restaurant: [''],
      facebook: [''],
      instagram: [''],
      twitter: [''],
      linkedin: ['']
    })
  }

  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.userForm.patchValue({ img: file });
    this.userForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);
  }
  /*validate() {
    this.userService.addUserProfile(this.user, this.userForm.value.img).subscribe(
      data => {
        console.log('returned data', data);
        this.router.navigate(['profile']);
      }
    )

  }*/


  /* Remove(i){
     this.values.splice(i,1);
   }
   add(){
     this.values.push({value:""})
   }*/
  updateUser(): void {

    this.userService.editUserId(this.user._id, this.user, this.userForm.value.img).subscribe(
      reponse => {

        this.toastr.warning(reponse.message);
        //this.router.navigate(['profile'])
        location.reload()
      },
      err => {
        console.log(err);
      }
    )
  }

 


}
