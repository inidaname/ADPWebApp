import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { faBars, faComments } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-member-side-menu',
    templateUrl: './member-side-menu.component.html',
    styleUrls: ['./member-side-menu.component.scss']
})

export class MemberSideMenuComponent implements OnInit {

    bars = faBars;
    message = faComments;
    @ViewChild('sideMenu') sideMenu: ElementRef;
    @ViewChild('topSide') topSide: ElementRef;

    constructor() {}

    ngOnInit() {}
    moveSide() {
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
}
