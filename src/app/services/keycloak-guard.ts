import { CanActivateFn } from '@angular/router';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {KeycloakService} from './keycloakService';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class KeycloakGuard implements CanActivate {
  constructor(private authService: KeycloakService, private router: Router) {}

  async canActivate(): Promise<boolean> {
    const isAuthenticated = await this.authService.isAuthenticated();
    if (!isAuthenticated) {
      this.router.navigate(['/login']); // Redirect to the login page
      return false;
    }
    return true;
  }

}
