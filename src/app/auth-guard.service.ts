import { AuthService } from './auth.service';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  ActivatedRoute,
  Router,
} from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.authService.isAuthenticated()
    .then((authenticated: boolean) => {
      if (authenticated) {
        return true;
      } else {
        this.authService.redirectUrl = state.url;
        this.router.navigate(['/login']);
        return false;
      }
    });
  }
}
