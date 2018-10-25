import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { MemberService } from './services/member/member.service';
import { Observable } from 'rxjs';
import { IUserData } from '../home/interface/userData';
import { UsersService } from './services/users/users.service';

@Component({
  selector: 'app-member',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {

  memberDetail: IUserData;
  isloggedin: boolean;
  bdNtwk: string;

  constructor(
    private member: MemberService,
    private userService: UsersService
    ) { }

  ngOnInit() {
    this.isloggedin = false;
    if (localStorage.getItem('token')) {
      this.userService.currentUserData.subscribe((res: IUserData) => {
        if (res !== null) {
          this.memberDetail = res;
          this.isloggedin = true;
        } else {
          this.member.getMemberByID().subscribe((member: IUserData) => {
            this.userService.changeUserData(member);
            this.memberDetail = member;
            this.isloggedin = true;
          }, (err) => {
            this.bdNtwk = 'This is taking longer than expected, you may have lost acces to the network';
          });
        }
      }, (err) => {
        this.bdNtwk = 'This is taking longer than expected, you may have lost acces to the network';
      });
    }
  }

}
