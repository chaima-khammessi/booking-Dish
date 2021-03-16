import { ActivatedRoute, Router } from '@angular/router';
import { DishService } from './../../../services/dish.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';

export interface Dish {
  name: string;
}

@Component({
  selector: 'app-update-dish',
  templateUrl: './update-dish.component.html',
  styleUrls: ['./update-dish.component.css']
})
export class UpdateDishComponent implements OnInit {
  id: any;
  dish: any;
  dishForm: FormGroup;
  imagePreview: string;
  dishs: any = {};

  constructor(private dishService: DishService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private cdRef: ChangeDetectorRef,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    let idDish = this.activatedRoute.snapshot.params.id;
    this.dishForm = this.formBuilder.group({
      name: [''],
      price: [''],
      ingredient: [''],
      calorie: [''],
      description: [''],
      img: [''],
      category: ['']
    });
    this.dishService.getDishById(idDish).subscribe(
      res => {
        this.dishs = res['dish'];
        let dish = res;
      }
    )
  }

  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.dishForm.patchValue({ img: file });
    this.dishForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.dishs.img = reader.result as string
    };
    reader.readAsDataURL(file);
  }




  updateDish(): void {

    this.dishService.editDish(this.dishs.id, this.dishs, this.dishForm.value.img).subscribe(
      reponse => {

        this.toastr.warning(reponse.message);
        this.router.navigate(['chef'])
      },
      err => {
        console.log(err);
      }
    )

  }

}
