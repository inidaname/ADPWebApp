import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IUserData } from 'src/app/home/interface/userData';

@Injectable({
  providedIn: 'root'
})
export class UsersService {


  private dataChange = new BehaviorSubject<IUserData>(null);
  private isLoggedIn = new BehaviorSubject<boolean>(false);

  currentUserData = this.dataChange.asObservable();
  LoggedIn = this.isLoggedIn.asObservable();

  constructor() {}

  changeUserData(UserData: IUserData) {
      this.dataChange.next(UserData);
  }

  changeLoggedIn(status: boolean) {
    this.isLoggedIn.next(status);
  }
}
