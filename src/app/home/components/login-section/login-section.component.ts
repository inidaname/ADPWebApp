import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../../services/login/login.service';
import { Router } from '@angular/router';
import { ILogIndata } from '../../interface/logInData';
import { IUserData } from '../../interface/userData';
import { UsersService } from '../../../members/services/users/users.service';
import { AuthService } from '../../services/auth/auth.service';
import { MemberService } from 'src/app/members/services/member/member.service';

@Component({
  selector: 'app-login-section',
  templateUrl: './login-section.component.html',
  styleUrls: ['./login-section.component.scss']
})
export class LoginSectionComponent implements OnInit {

  loginForm: FormGroup;
  lgBtn = true;
  userFailed: string = null;
  loggedIn: boolean;
  userData: IUserData;
  loading: boolean;

  constructor(
    private login: LoginService,
    private fb: FormBuilder,
    private router: Router,
    private user: UsersService,
    private logout: AuthService,
    private member: MemberService
    ) { }

  ngOnInit() {
    this.loading = true;
    this.loginForm = this.fb.group({
      loginPhone: ['', Validators.required],
      loginPassword: ['', Validators.required]
    });

    if (localStorage.getItem('token')) {
      this.member.getMemberByID().subscribe((res: IUserData) => {
        this.user.changeUserData(res);
        this.loggedIn = true;
        this.loading = false;
        this.user.changeLoggedIn(true);
      });
    } else {
      this.loading = false;
    }
    this.user.currentUserData.subscribe((res: IUserData) => {
      if (res !== null) {
        this.userData = res;
      }
    });

  }

  loginUser() {
    this.loading = true;
    event.preventDefault();
    if (this.loginForm.invalid) {
      this.loading = false;
      return;
    }

    const {loginPhone, loginPassword} = this.loginForm.value;
    // if (!loginPhone.startsWith('+')) {
    //   this.loading = false;
    //   return this.userFailed = 'Please your phone number must begin with a +';
    // }
    const obs = this.login.logInUser(loginPhone, loginPassword);

    obs.subscribe((data: ILogIndata) => {
      this.loading = false;
      if (data.token) {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('token', data.token);
        localStorage.setItem('id', data.user._id);
        this.user.changeUserData(data.user);
        this.userData = data.user;
        this.user.changeLoggedIn(true);
        // this.router.navigate(['/member']);
        // location.reload();
        this.loggedIn = true;
      } else {
        this.userFailed = 'Login failed, please check your login details';
      }
    },
    (error: Error) => {
      this.loading = false;
      this.userFailed = 'Login failed, please check your login details and try again';
    });

  }

  userLogout() {
    this.logout.logout();
    this.loggedIn = false;
    this.user.changeLoggedIn(false);
  }
}
