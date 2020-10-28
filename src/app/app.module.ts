import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SliderComponent } from './components/slider/slider.component';
import { TodaysSpecialComponent } from './components/todays-special/todays-special.component';
import { CardComponent } from './components/card/card.component';
import { MenuComponent } from './components/menu/menu.component';
import { OurSpecialsComponent } from './components/our-specials/our-specials.component';
import { ReserveComponent } from './components/reserve/reserve.component';
import { BookTableComponent } from './components/book-table/book-table.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ChefsComponent } from './components/chefs/chefs.component';
import { ContactComponent } from './components/contact/contact.component';
import { DishComponent } from './components/dish/dish.component';
import { BookingComponent } from './components/booking/booking.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { BmiComponent } from './components/bmi/bmi.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { SingupComponent } from './components/singup/singup.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DisplayDishComponent } from './components/display-dish/display-dish.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    TodaysSpecialComponent,
    CardComponent,
    MenuComponent,
    OurSpecialsComponent,
    ReserveComponent,
    BookTableComponent,
    GalleryComponent,
    ChefsComponent,
    ContactComponent,
    DishComponent,
    BookingComponent,
    RecipesComponent,
    BmiComponent,
    CartComponent,
    CheckoutComponent,
    SingupComponent,
    LoginComponent,
    DisplayDishComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
   
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
