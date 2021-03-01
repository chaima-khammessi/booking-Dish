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
  menu = new HomeMenu();
  menus: any = [];
  images: Array<string> = [];
  imagePreview: string;
  formData: FormData = new FormData();
  constructor(private formBuilder: FormBuilder,
    private menuService: MenuService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.menu = new HomeMenu();
    this.menus.push(this.menu);
  }

  addForm() {
    this.menu = new HomeMenu();
    this.menus.push(this.menu);
  }

  removeForm(index) {
    this.menus.splice(index);
  }

  onImageSelected(event: Event, index: number) {
    const file = (event.target as HTMLInputElement).files[0];
    this.formData.set("file-"+index ,file);
    this.menus[index].imgName = file.name;
    const reader = new FileReader();
    reader.onload = () => {
      this.images[index] = reader.result as string
    };
    reader.readAsDataURL(file);
  }

  validate() {
    this.menuService.addMultipleMenu(this.menus, this.formData).subscribe(
      data => {
        console.log('returned data', data);
        //this.router.navigate(['chef'])
      }
    )
  }


}
