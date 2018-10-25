import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users/users.service';
import { IUserData } from 'src/app/home/interface/userData';

@Component({
  selector: 'app-member-settings',
  templateUrl: './member-settings.component.html',
  styleUrls: ['./member-settings.component.scss']
})
export class MemberSettingsComponent implements OnInit {

  memberDetail: IUserData;
  editInit: boolean;
  editBtn: string;
  constructor(
    private userService: UsersService
    ) { }

  ngOnInit() {
    this.editInit = false;
    this.editBtn = 'Edit Profile';
    this.userService.currentUserData.subscribe((res: IUserData) => this.memberDetail = res);
  }

  EditProfile() {
    if (this.editInit === false) {
      this.editInit = true;
      this.editBtn = 'Save Profile';
    } else {
      this.editBtn = 'Edit Profile';
      this.editInit = false;
    }
  }

}
