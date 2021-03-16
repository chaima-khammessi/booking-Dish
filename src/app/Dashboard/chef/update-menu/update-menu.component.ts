import { ToastrService } from 'ngx-toastr';
import { MenuService } from './../../../services/menu.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-menu',
  templateUrl: './update-menu.component.html',
  styleUrls: ['./update-menu.component.css']
})
export class UpdateMenuComponent implements OnInit {
  id: any;
  menu: any;
  menuForm: FormGroup;
  imagePreview: string;
  menus: any = {};
  constructor(private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private menuService: MenuService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    let idDish = this.activatedRoute.snapshot.params.id;
    this.menuForm = this.formBuilder.group({
      name: [''],
      price: [''],
      ingredient: [''],
      img: [''],
      category: ['']
    });
    this.menuService.getMenuById(idDish).subscribe(
      res => {
        this.menus = res['menu'];
        let menu = res;
      }
    )
  }

  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.menuForm.patchValue({ img: file });
    this.menuForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.menus.img = reader.result as string
    };
    reader.readAsDataURL(file);
  }

  updateMenu(): void {
    this.menuService.editMenu(this.menus.id, this.menus, this.menuForm.value.img).subscribe(
      reponse => {

        this.toastr.warning(reponse.message);
        this.router.navigate(['all-menu'])
      },
      err => {
        console.log(err);
      }
    )
  }

}
