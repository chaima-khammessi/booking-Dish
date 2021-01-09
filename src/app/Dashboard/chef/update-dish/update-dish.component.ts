import { ActivatedRoute, Router } from '@angular/router';
import { DishService } from './../../../services/dish.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/compiler/src/compiler_facade_interface';
import { User } from 'angular-authentication-service';

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
  Dish:any;

  constructor(private dishService: DishService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private cdRef:ChangeDetectorRef

  ) { }
 /* get name(){return this.dishForm.get('name')}
  get price(){return this.dishForm.get('price')}
  get calorie(){return this.dishForm.get('calorie')}
  get description(){return this.dishForm.get('description')}
  get img(){return this.dishForm.get('img')}*/



  ngOnInit(): void {
     this.dishForm = this.formBuilder.group({
       name: [''],
       price: [''],
       ingredient: [''],
       calorie: [''],
       description: [''],
       img: ['']
     });
   /* let idDish = this.activatedRoute.snapshot.params.id;
    this.dishService.getDishById(idDish).subscribe(
      res => {
        let dish = this.dishs = res['dish'];
        this.updateDishForm.patchValue({
          name: dish.name,
          price: dish.price,
          ingredient: dish.ingredient,
          calorie: dish.calorie,
          img: dish.img

      })}
      
    )
      */
    /* this.dishForm = this.formBuilder.group({
      name:[''],
      price: [''],
      ingredient: [''],
      calorie: [''], 
      img:[''],
      description: ['']
   
    });*/
    let idDish = this.activatedRoute.snapshot.params.id;
    this.dishService.getDishById(idDish).subscribe(
      res=> {
        this.dishs = res['dish'];
        let dish = res;   
      }
    )
 
      }

        onImageSelected(event: Event){} /*{
          const file = (event.target as HTMLInputElement).files[0];
          this.dishForm.patchValue({ img: file });
          this.dishForm.updateValueAndValidity();
          const reader = new FileReader();
          reader.onload = () => {
            this.imagePreview = reader.result as string
          };
          reader.readAsDataURL(file);
        }*/
         
        validateUpdate() {
          let Dish:any
          let data = this.dishForm.value;
          let idDish = this.activatedRoute.snapshot.params.id;

         let dishs = new Dish(data.name, data.price, data.ingredient, data.calorie, data.img, data.description, idDish)
          this.dishService.editDish(this.dishs).subscribe(
            () => {
              this.router.navigate(['chef']);
            },
            err=>{
              console.log(err);
              
          
            }
          )

        }

      }
