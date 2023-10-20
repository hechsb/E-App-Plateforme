import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (this.authService.isLoggedIn()) {
      const userRole = this.authService.getUserRole();
      const requestedRole = next.data['roles'];
  
      if (requestedRole && !requestedRole.includes(userRole)) {
        return this.router.parseUrl(userRole === 'admin' ? 'adminPage' : 'userPage');
      }
  
      return true; 
    } else {
    
      return this.router.parseUrl('/signin');
    }
  }
}
