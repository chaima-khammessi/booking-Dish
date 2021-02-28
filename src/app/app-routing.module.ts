import { TableMenuComponent } from './Dashboard/chef/table-menu/table-menu.component';
import { AddMenuComponent } from './Dashboard/chef/add-menu/add-menu.component';
import { OurDishesComponent } from './components/our-dishes/our-dishes.component';
import { DetailProfilChefComponent } from './Dashboard/admin/detail-profil-chef/detail-profil-chef.component';
import { ProfileComponent } from './Dashboard/chef/profile/profile.component';
import { AuthCompanyGuard } from './Dashboard/company/auth-company.guard';
import { HistoryDishsCompanyComponent } from './Dashboard/company/history-dishs-company/history-dishs-company.component';
import { FavoriteDishesCompanyComponent } from './Dashboard/company/favorite-dishes-company/favorite-dishes-company.component';
import { ReservedDishesComponent } from './Dashboard/company/reserved-dishes/reserved-dishes.component';
import { CompanyComponent } from './Dashboard/company/company.component';
import { AuthUserGuard } from './Dashboard/user/auth-user.guard';
import { HistoryDishsComponent } from './Dashboard/user/history-dishs/history-dishs.component';
import { FavoriteDishesComponent } from './Dashboard/user/favorite-dishes/favorite-dishes.component';
import { TablePlatsReservesComponent } from './Dashboard/user/table-plats-reserves/table-plats-reserves.component';
import { UserComponent } from './Dashboard/user/user.component';
import { GalleryChefComponent } from './Dashboard/chef/gallery-chef/gallery-chef.component';
import { from } from 'rxjs';
import { DisplayUserComponent } from './Dashboard/admin/display-user/display-user.component';
import { AuthChefGuard } from './Dashboard/chef/auth-chef.guard';
import { AuthAdminGuard } from './Dashboard/admin/auth-admin.guard';
import { ValidatorAdminDishComponent } from './Dashboard/admin/validator-admin-dish/validator-admin-dish.component';
import { DisplayDishChefComponent } from './Dashboard/chef/display-dish-chef/display-dish-chef.component';
import { UpdateDishComponent } from './Dashboard/chef/update-dish/update-dish.component';
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
import { MenuComponent } from './components/menu/menu.component';
import { DishComponent } from './components/dish/dish.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule, Component } from '@angular/core'
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { DishFavorisComponent } from './components/dish-favoris/dish-favoris.component';




const routes: Routes = [
  {
    path: "", component: HomeComponent
  },
  {
    path: "dish/:id", component: DishComponent
  },
  {
    path:'our-dishes',
    component:OurDishesComponent
  },
  {
    path: "menu", component: MenuComponent
  },

  {
    path: "chefs", component: ChefsComponent
  },
  {
    path:'dish-favoris', component:DishFavorisComponent
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
    path: 'update-dish/:id',
    component: UpdateDishComponent,
    canActivate: [AuthChefGuard]
  },
  {
    path: 'display-dish-chef/:id',
    component: DisplayDishChefComponent,
    canActivate: [AuthChefGuard]
  },


  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthAdminGuard]
  },
  {
    path: 'user',
    component: UserComponent,
    canActivate: [AuthUserGuard]

  },
  {
    path: 'table-plats-reserves',
    component: TablePlatsReservesComponent,
    canActivate: [AuthUserGuard]
  },
  {
    path: 'favorite-dishes',
    component: FavoriteDishesComponent,
    canActivate: [AuthUserGuard]
  },
  {
    path: 'history-dishs',
    component: HistoryDishsComponent,
    canActivate: [AuthUserGuard]
  },
  {
    path: 'company',
    component: CompanyComponent,
    canActivate: [AuthCompanyGuard]
  },
  {
    path: 'reserved-dishes',
    component: ReservedDishesComponent,
    canActivate: [AuthCompanyGuard]
  },
  {
    path: 'favorite-dishes-company',
    component: FavoriteDishesCompanyComponent,
    canActivate: [AuthCompanyGuard]
  },
  {
    path: 'history-dishs-company',
    component: HistoryDishsCompanyComponent,
    canActivate: [AuthCompanyGuard]
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path: 'login-admin',
    component: LoginAdminComponent
  },
  {
    path: 'chef',
    component: ChefComponent,
    canActivate: [AuthChefGuard]
  },
  {
    path: 'gallery-chef',
    component: GalleryChefComponent,
    canActivate: [AuthChefGuard]
  },
  {
    path: 'dish-chef',
    component: DishChefComponent,
    canActivate: [AuthChefGuard]
  },
  {
    path:'add-menu',
    component:AddMenuComponent,
    canActivate: [AuthChefGuard]
  },
  {path:'table-menu',
  component:TableMenuComponent,
  canActivate:[AuthChefGuard]

},

  {
    path: 'display-dish/:id',
    component: DisplayDishComponent,
    canActivate: [AuthChefGuard]
  },
  {
    path:"profile", component:ProfileComponent,
   canActivate:[AuthChefGuard]
  },
  {
    path: 'validator-admin-dish',
    component: ValidatorAdminDishComponent,
    canActivate: [AuthAdminGuard]
  },
  {
    path:'detail-profil-chef',
    component:DetailProfilChefComponent,
    canActivate:[AuthAdminGuard]
  },
  {
    path: 'display-user/:id',
    component: DisplayUserComponent
  }


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
