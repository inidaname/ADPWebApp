import { Component, OnInit } from '@angular/core';
import { MemberService } from '../members/services/member/member.service';
import { IUserData } from '../home/interface/userData';
import { UsersService } from 'src/app/members/services/users/users.service';
import { AdminService } from './services/admin/admin.service';
import { AdminStatus } from './services/admin-status/admin-status.service';
import { Message } from './routes/admin-messages/message';
import { AdminMember } from './Interface/admin';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  member: IUserData;
  loading: boolean;
  isAdmin: boolean;

  constructor(
    private adminStatus: AdminStatus,
    private user: UsersService,
    private admin: AdminService,
    private memberService: MemberService
  ) { }

  ngOnInit() {
    this.loading = true;
    this.isAdmin = false;
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
    // this.adminStatus.adminStats.subscribe((res: boolean) => {
    //   if (res === false) {
    //     this.user.currentUserData.subscribe((user: IUserData) => {
    //       if (user !== null && user.adminLevel === 'admin') {
    //         this.isAdmin = true;
    //         this.adminStatus.setAdminStatus(true);
    //       } else {
    //         this.isAdmin = false;
    //         this.adminStatus.setAdminStatus(false);
    //       }
    //     });
    //   } else {
    //     this.isAdmin = true;
    //   }
    // });

    // @Todo: Be put inbetween admin stats function
    this.admin.getMessages().subscribe((res: Array<Message>) => {
      this.adminStatus.AllMsg(res);
    });
    this.admin.getWaitingAdmins().subscribe((res: Array<AdminMember>) => {
      this.adminStatus.inActiveAdmins(res);
    });

  }

}
