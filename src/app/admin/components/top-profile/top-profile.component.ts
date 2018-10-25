import { Component, OnInit } from '@angular/core';
import { faBars, faComments, faCaretDown, faEllipsisH, faMale } from '@fortawesome/free-solid-svg-icons';
import { MemberService } from '../../../members/services/member/member.service';
import { IUserData } from '../../../home/interface/userData';
import { UsersService } from 'src/app/members/services/users/users.service';
@Component({
    selector: 'app-top-profile',
    templateUrl: './top-profile.component.html',
    styleUrls: ['./top-profile.component.scss']
})

export class TopProfileComponent implements OnInit {

    bars = faBars;
    message = faComments;
    down = faCaretDown;
    proPic: string;
    fullName: string;

    constructor (
        private memberService: MemberService,
        private userService: UsersService
    ) {}

    ngOnInit() {
    }
}
