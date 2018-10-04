import { Component, OnInit } from '@angular/core';
import { faBars, faComments, faCaretDown, faEllipsisH, faMale } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-member-top-profile',
    templateUrl: './member-top-profile.component.html',
    styleUrls: ['./member-top-profile.component.scss']
})

export class MemberTopProfileComponent implements OnInit {

    bars = faBars;
    message = faComments;

    constructor () {}

    ngOnInit() {
    }
}
