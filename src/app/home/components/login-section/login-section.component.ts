import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../../services/login/login.service';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-section',
  templateUrl: './login-section.component.html',
  styleUrls: ['./login-section.component.scss']
})
export class LoginSectionComponent implements OnInit {

  loginForm: FormGroup;
  lgBtn = true;
  userFailed: string;

  constructor(
    private login: LoginService,
    private fb: FormBuilder,
    private router: Router
    ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      loginPhone: ['', Validators.required],
      loginPassword: ['', Validators.required]
    });

  }

  loginUser() {
    if (this.loginForm.invalid) {
      return;
    }

    const {loginPhone, loginPassword} = this.loginForm.value;
    const obs = this.login.logInUser(loginPhone, loginPassword);

    obs.subscribe((data: any) => {
      if (data.token) {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('token', data.token);
        localStorage.setItem('id', data.user._id);
        this.router.navigate(['/member']);
      } else {
        this.userFailed = 'Login failed, please check your login details';
      }
    });

  }

}
