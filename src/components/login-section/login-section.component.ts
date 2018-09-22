import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../app/home/services/login/login.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-section',
  templateUrl: './login-section.component.html',
  styleUrls: ['./login-section.component.scss']
})
export class LoginSectionComponent implements OnInit {

  loginForm: FormGroup;
  lgBtn = true;

  constructor(
    private login: LoginService,
    private fb: FormBuilder
    ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      loginPhone: ['', Validators.required],
      loginPassword: ['', Validators.required]
    });

  }

  loginUser() {
    if (this.loginForm.invalid) {
      console.log(event);
      return;
    }

    const {loginPhone, loginPassword} = this.loginForm.value;
    const obs = this.login.logInUser(loginPhone, loginPassword);

    obs.subscribe((data) => {
      console.log(data);
    });

  }

}
