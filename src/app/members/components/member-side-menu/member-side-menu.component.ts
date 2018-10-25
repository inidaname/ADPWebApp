import { Component, OnInit, ViewChild, ElementRef, Input, DoCheck} from '@angular/core';
import { faBars, faComments } from '@fortawesome/free-solid-svg-icons';
import { MembersComponent } from '../../members.component';
import { Observable } from 'rxjs';
import { AuthService } from '../../../home/services/auth/auth.service';
import { Router } from '@angular/router';
import { MemberService } from '../../services/member/member.service';
import { IUserData } from '../../../home/interface/userData';
import { UsersService } from '../../services/users/users.service';

@Component({
    selector: 'app-member-side-menu',
    templateUrl: './member-side-menu.component.html',
    styleUrls: ['./member-side-menu.component.scss']
})

export class MemberSideMenuComponent implements OnInit {

    bars = faBars;
    message = faComments;
    proPic = '/assets/adplogo.jpg';
    fullName = 'ADP Member';
    @ViewChild('sideMenu') sideMenu: ElementRef;
    @ViewChild('topSide') topSide: ElementRef;


    constructor(
        private logout: AuthService,
        private router: Router,
        private userService: UsersService
    ) {}

    ngOnInit() {
        this.topSide.nativeElement.classList.remove('WeekMe');
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
        this.userService.changeLoggedIn(true);
        this.router.navigate(['/']);
    }
}
