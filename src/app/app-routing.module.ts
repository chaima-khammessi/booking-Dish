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
    path: 'display_dish/:id',
    component: DisplayDishComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
