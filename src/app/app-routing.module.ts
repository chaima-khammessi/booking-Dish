import { DisplayChefComponent } from './Dashboard/chef/display-chef/display-chef.component';
import { DishChefComponent } from './Dashboard/chef/dish-chef/dish-chef.component';
import { ChefComponent } from './Dashboard/chef/chef/chef.component';
import { LoginAdminComponent } from './Dashboard/admin/login-admin/login-admin.component';
import { SignUpComponent } from './Dashboard/admin/sign-up/sign-up.component';
import { AdminComponent } from './Dashboard/admin/admin/admin.component';
import { DisplayDishComponent } from './components/display-dish/display-dish.component';
import { LoginComponent } from './components/login/login.component';
import { SingupComponent } from './components/singup/singup.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { CartComponent } from './components/cart/cart.component';
import { BmiComponent } from './components/bmi/bmi.component';
import { ContactComponent } from './components/contact/contact.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ChefsComponent } from './components/chefs/chefs.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { BookingComponent } from './components/booking/booking.component';
import { MenuComponent } from './components/menu/menu.component';
import { DishComponent } from './components/dish/dish.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateDishComponent } from './Dashboard/chef/update-dish/update-dish.component';

const routes: Routes = [
  {
    path: "", component: HomeComponent
  },
  {
    path: "dish", component: DishComponent
  },
  {
    path: "menu", component: MenuComponent
  },
  {
    path: "booking", component: BookingComponent
  },
  {
    path: "recipes", component: RecipesComponent
  },
  {
    path: "chefs", component: ChefsComponent
  },
  {
    path: "gallery", component: GalleryComponent
  },
  {
    path: "contact", component: ContactComponent
  },
  {
    path: "bmi", component: BmiComponent
  },
  {
    path: "cart", component: CartComponent
  },
  {
    path: "checkout", component: CheckoutComponent
  },
  {
    path: "singup", component: SingupComponent
  },
  {
    path: "login", component: LoginComponent

  },
  {
    path: 'display-chef/:id',
    component: DisplayChefComponent
  },
  {
    path:'admin',
    component:AdminComponent
  },
  {
    path:'sign-up',
    component:SignUpComponent
  },
  {
    path:'login-admin',
    component:LoginAdminComponent
  },
  {
    path:'chef',
    component:ChefComponent
  },
  {
    path:'dish-chef',
    component:DishChefComponent
  },
  {
    path:'update-dish/:id',
    component:UpdateDishComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
