import { MatChipsModule } from '@angular/material/chips';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserComponent } from './Dashboard/user/user.component';
import { HeaderDashboardComponent } from './Dashboard/user/header-dashboard/header-dashboard.component';
import { TablePlatsReservesComponent } from './Dashboard/user/table-plats-reserves/table-plats-reserves.component';
import { FavoriteDishesComponent } from './Dashboard/user/favorite-dishes/favorite-dishes.component';
import { HistoryDishsComponent } from './Dashboard/user/history-dishs/history-dishs.component';
import { CompanyComponent } from './Dashboard/company/company.component';
import { HeaderCampanyComponent } from './Dashboard/company/header-campany/header-campany.component';
import { ReservedDishesComponent } from './Dashboard/company/reserved-dishes/reserved-dishes.component';
import { FavoriteDishesCompanyComponent } from './Dashboard/company/favorite-dishes-company/favorite-dishes-company.component';
import { HistoryDishsCompanyComponent } from './Dashboard/company/history-dishs-company/history-dishs-company.component';
import { DishFavorisComponent } from './components/dish-favoris/dish-favoris.component';
import { ProfileComponent } from './Dashboard/chef/profile/profile.component';
import { DetailProfilChefComponent } from './Dashboard/admin/detail-profil-chef/detail-profil-chef.component';
import {MatIconModule} from '@angular/material/icon';
import { OurDishesComponent } from './components/our-dishes/our-dishes.component';
import { AddMenuComponent } from './Dashboard/chef/add-menu/add-menu.component';


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
    UserComponent,
    HeaderDashboardComponent,
    TablePlatsReservesComponent,
    FavoriteDishesComponent,
    HistoryDishsComponent,
    CompanyComponent,
    HeaderCampanyComponent,
    ReservedDishesComponent,
    FavoriteDishesCompanyComponent,
    HistoryDishsCompanyComponent,
    DishFavorisComponent,
    ProfileComponent,
    DetailProfilChefComponent,
    OurDishesComponent,
    AddMenuComponent,


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
    NgbModule,
    ReactiveFormsModule,
    MatChipsModule,
    MatIconModule


  ],
  providers: [
    UserFormComponent],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
})
export class AppModule { }
