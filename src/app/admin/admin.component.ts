import { Component, OnInit } from '@angular/core';
import { MemberService } from '../members/services/member/member.service';
import { IUserData } from '../home/interface/userData';
import { UsersService } from 'src/app/members/services/users/users.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  member: IUserData;
  loading: boolean;

  constructor(
    private memberService: MemberService,
    private user: UsersService
  ) { }

  ngOnInit() {
    this.loading = true;
    this.user.currentUserData.subscribe((res: IUserData) => {
      if (res !== null) {
          this.member = res;
          this.loading = false;
      } else {
          this.memberService.getMemberByID().subscribe((re: IUserData) => {
              this.user.changeUserData(re);
              this.member = re;
              this.loading = false;
            });
      }
    });
  }

}
