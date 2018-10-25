import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin/admin.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IUserData } from 'src/app/home/interface/userData';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-admin-management',
  templateUrl: './admin-management.component.html',
  styleUrls: ['./admin-management.component.scss']
})
export class AdminManagementComponent implements OnInit {

  memberCheck: FormGroup;
  gotName: string;
  gotLGA: string;
  gotState: string;
  gotStatus: string;
  gotDate: Date;
  msg: string;
  passport: string;
  change: boolean;

  constructor(
    private admin: AdminService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.memberCheck = this.fb.group({
      memberField: ['', Validators.required],
      memberBy: ['', Validators.required]
    });
  }

  checkMember() {
    this.change = true;
    const {memberField, memberBy} = this.memberCheck.value;
    const obs = this.admin.getUserBy(memberField, memberBy);
    obs.subscribe((res: IUserData) => {
      this.gotName = res.fullName;
      this.gotLGA = res.lgaName;
      this.gotState = res.stateName;
      this.gotStatus = (res.isSuspended === false) ? 'Not Paid' : 'Paid';
      this.gotDate = res.dateCreated;
      this.passport = res.passport;
      this.change = false;
    }, (err: HttpErrorResponse) => {
      if (err.status === 404) {
        this.msg = 'The user does not exist';
        this.change = false;
      }
    });
  }

}
