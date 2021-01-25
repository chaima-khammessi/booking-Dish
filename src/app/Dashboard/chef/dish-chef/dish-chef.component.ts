import { DishService } from './../../../services/dish.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dish-chef',
  templateUrl: './dish-chef.component.html',
  styleUrls: ['./dish-chef.component.css']
})
export class DishChefComponent implements OnInit {
  dish: any = {};
  dishForm: FormGroup;
  imagePreview: string;


  constructor(private dishService: DishService,

    private formBuilder: FormBuilder,
    private router: Router,
    private userSevice: UsersService,
  ) { }

  ngOnInit(): void {
    this.dishForm = this.formBuilder.group({
      name: [''],
      price: [''],
      ingredient: [''],
      calorie: [''],
      description: [''],
      img: [''],
      


    })
  }
  validate() {
    this.dishService.addDish(this.dish, this.dishForm.value.img).subscribe(
      data => {
        console.log('returned data', data);
        this.router.navigate(['chef']);
      }
    )

  }

  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.dishForm.patchValue({ img: file });
    this.dishForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);
  }


  logout() {
    this.userSevice.logoutUser();
    this.router.navigate(['login'])

  }
}
