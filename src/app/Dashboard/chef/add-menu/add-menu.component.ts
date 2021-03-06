import { Router } from '@angular/router';
import { MenuService } from './../../../services/menu.service';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HomeMenu } from './../../../model/home-menu.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css']
})
export class AddMenuComponent implements OnInit {

  menuForm: FormGroup;
  imagePreview: string;
  menus: any = []
  constructor(private formBuilder: FormBuilder,
    private menuService: MenuService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.menuForm = this.formBuilder.group({
      name: [''],
      category: [''],
      price: [''],
      ingredient: [''],
      img: [''],

    })
  }
  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.menuForm.patchValue({ img: file });
    this.menuForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);
  }
  validate() {
    this.menuService.addMenu(this.menus, this.menuForm.value.img).subscribe(
      data => {
        console.log('returned data', data);
        this.router.navigate(['all-menu']);
      }
    )
  }


}
