import { UsersService } from 'src/app/services/users.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthUserGuard implements CanActivate {
  constructor(private userService: UsersService,
    private router: Router

  ) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let isLoggedIn = this.userService.isLoggedIn();
    if (isLoggedIn) {
      return true;
    } else {
      this.router.navigate(['login'])
      return false;

    }
  }

}
