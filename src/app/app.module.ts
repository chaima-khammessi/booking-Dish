import { from } from 'rxjs';

import { UsersService } from './services/users.service';
import { DataService } from './services/data.service';

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
import { UserFormComponent } from './components/singup/user-form/user-form.component'
import { CommonModule } from '@angular/common';
import { AdminComponent } from './Dashboard/admin/admin/admin.component';
import { CardDishComponent } from './components/card-dish/card-dish.component';
import { TableFilterComponent } from './Dashboard/admin/table-filter/table-filter.component';
import { HttpClientInMemoryWebApiModule, InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SignUpComponent } from './Dashboard/admin/sign-up/sign-up.component';
import { LoginAdminComponent } from './Dashboard/admin/login-admin/login-admin.component';
import { ChefComponent } from './Dashboard/chef/chef/chef.component';
import { TableComponent } from './Dashboard/chef/table/table.component';
import { DishChefComponent } from './Dashboard/chef/dish-chef/dish-chef.component';
import { UpdateDishComponent } from './Dashboard/chef/update-dish/update-dish.component';
import { DisplayDishChefComponent } from './Dashboard/chef/display-dish-chef/display-dish-chef.component';
import { AlertModule } from 'ngx-alerts';
import { ValidatorAdminDishComponent } from './Dashboard/admin/validator-admin-dish/validator-admin-dish.component';
import { ToastrModule, ToastNoAnimation, ToastNoAnimationModule } from 'ngx-toastr';
import { HeaderDashboardAdminComponent } from './Dashboard/admin/header/header-dashboard-admin/header-dashboard-admin.component';
import { DisplayUserComponent } from './Dashboard/admin/display-user/display-user.component';
import { HeaderDashoardChefComponent } from './Dashboard/chef/header/header-dashoard-chef/header-dashoard-chef.component';
import { GalleryChefComponent } from './Dashboard/chef/gallery-chef/gallery-chef.component';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    TodaysSpecialComponent,
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
    UserFormComponent,
    AdminComponent,
    CardDishComponent,
    TableFilterComponent,
    SignUpComponent,
    LoginAdminComponent,
    ChefComponent,
    TableComponent,
    DishChefComponent,
    UpdateDishComponent,
    DisplayDishChefComponent,
    ValidatorAdminDishComponent,
    HeaderDashboardAdminComponent,
    DisplayUserComponent,
    HeaderDashoardChefComponent,
    GalleryChefComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    //HttpClientInMemoryWebApiModule
    Ng2SearchPipeModule,
    NgxPaginationModule,
    Ng2OrderModule,
    // Specify your library as an import
    AlertModule.forRoot({ maxMessages: 5, timeout: 5000, positionX: 'right' }),
    ToastNoAnimationModule.forRoot(),
    NgxGalleryModule,
    NgbModule


  ],
  providers: [
    UserFormComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
