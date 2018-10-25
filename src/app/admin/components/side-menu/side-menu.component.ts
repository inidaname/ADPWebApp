import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../home/services/auth/auth.service';
import { MemberService } from '../../../members/services/member/member.service';
import { IUserData } from '../../../home/interface/userData';



@Component({
    selector: 'app-side-menu',
    templateUrl: './side-menu.component.html',
    styleUrls: ['./side-menu.component.scss']
})

export class SideMuneComponent implements OnInit {
    member: IUserData;
    constructor(
        private logout: AuthService,
        private memberService: MemberService
    ) {}

    ngOnInit() {
        const obs = this.memberService.getMemberByID();
        obs.subscribe((res: IUserData) => this.member = res);
    }
    userLogout() {
        this.logout.logout();
    }
}
