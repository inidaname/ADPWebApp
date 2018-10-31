import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MemberService } from './members/services/member/member.service';
import { IUserData } from './home/interface/userData';
import { UsersService } from './members/services/users/users.service';
import { AdminStatus } from './admin/services/admin-status/admin-status.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  private token = localStorage.getItem('token');
  private id = localStorage.getItem('id');
  private admin = localStorage.getItem('admin');
  constructor(
    private router: Router,
    private adminStatus: AdminStatus
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      let url: string = state.url;
    return this.verifyLogin(url);
  }

  verifyLogin(url): boolean {
    if (!this.isAdmin()) {
        this.router.navigate(['/member']);
        return false;
    } else if (this.isAdmin()) {
        return true;
    }
  }

  public isAdmin(): boolean {
      let status = false;
      if ( localStorage.getItem('admin') === 'true') {
        status = true;
      } else {
        status = false;
      }
      return status;
  }

}
