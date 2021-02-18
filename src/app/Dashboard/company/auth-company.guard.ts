import { CampanyService } from './../../services/campany.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthCompanyGuard implements CanActivate {
  constructor(private companyService: CampanyService,
              private router: Router
  ) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let isLoggedIn = this.companyService.isLoggedIn();
      if(isLoggedIn){
    return true;}
    else{
      this.router.navigate(['login']);
      return false;
    }
  }

}
