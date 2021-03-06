import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      const url: string = state.url;
      return this.verifyLogin(url);
  }

  verifyLogin(url): boolean {
    if (!this.isLoggedIn()) {
        this.router.navigate(['/']);
        return false;
    } else if (this.isLoggedIn()) {
        return true;
    }
  }
  public isLoggedIn(): boolean {
      let status = false;
      if ( localStorage.getItem('isLoggedIn') === 'true') {
        status = true;
      } else {
        status = false;
      }
      return status;
  }
}
