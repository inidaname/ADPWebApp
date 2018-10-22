import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../../services/login/login.service';
import { Router } from '@angular/router';
import { ILogIndata } from '../../interface/logInData';
import { IUserData } from '../../interface/userData';
import { MemberService } from '../../../members/services/member/member.service';
import { AuthService } from '../../services/auth/auth.service';

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
    private user: MemberService,
    private logout: AuthService
    ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      loginPhone: ['', Validators.required],
      loginPassword: ['', Validators.required]
    });

    if (localStorage.getItem('token')) {
      this.loggedIn = true;
      this.user.getMemberByID().subscribe((data: IUserData) => this.userData = data);
    }

  }

  loginUser() {
    this.loading = true;
    event.preventDefault();
    if (this.loginForm.invalid) {
      this.loading = false;
      return;
    }

    const {loginPhone, loginPassword} = this.loginForm.value;
    if (!loginPhone.startsWith('+')) {
      this.loading = false;
      return this.userFailed = 'Please your phone number must begin with a +';
    }
    const obs = this.login.logInUser(loginPhone, loginPassword);

    obs.subscribe((data: ILogIndata) => {
      this.loading = false;
      if (data.token) {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('token', data.token);
        localStorage.setItem('id', data.user.id);
        this.router.navigate(['/member']);
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
  }
}
