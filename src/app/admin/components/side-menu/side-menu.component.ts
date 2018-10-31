import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from '../../../home/services/auth/auth.service';
import { MemberService } from '../../../members/services/member/member.service';
import { IUserData } from '../../../home/interface/userData';
import { UsersService } from 'src/app/members/services/users/users.service';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';



@Component({
    selector: 'app-side-menu',
    templateUrl: './side-menu.component.html',
    styleUrls: ['./side-menu.component.scss']
})

export class SideMuneComponent implements OnInit {
    member: IUserData;
    bars = faBars;
    @ViewChild('sideMenu') sideMenu: ElementRef;
    @ViewChild('topSide') topSide: ElementRef;
    proPic: string;
    fullName: string;
    constructor(
        private logout: AuthService,
        private memberService: MemberService,
        private router: Router,
        private userService: UsersService
    ) {}

    ngOnInit() {
    }

    moveSide() {
        if (!this.topSide.nativeElement.classList.contains('WeekMe')) {
            this.userService.currentUserData.subscribe((res: IUserData) => {
                this.proPic = res.passport;
                this.fullName = res.fullName;
            });
            this.topSide.nativeElement.classList.add('WeekMe');
        }
        if (this.sideMenu.nativeElement.classList.contains('checkMe')) {
            this.sideMenu.nativeElement.style.width = '0px';
            this.topSide.nativeElement.style.marginLeft = '10px';
            this.sideMenu.nativeElement.classList.remove('checkMe');
        } else {
            this.sideMenu.nativeElement.style.width = '260px';
            this.topSide.nativeElement.style.marginLeft = '270px';
            this.sideMenu.nativeElement.classList.add('checkMe');
        }
    }

    userLogout() {
        this.logout.logout();
        this.userService.changeLoggedIn(false);
        this.router.navigate(['/']);
    }
}
