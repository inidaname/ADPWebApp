import { Component, OnInit } from '@angular/core';
import { faBars, faComments, faCaretDown, faEllipsisH, faMale } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-top-profile',
    templateUrl: './top-profile.component.html',
    styleUrls: ['./top-profile.component.scss']
})

export class TopProfileComponent implements OnInit {

    bars = faBars;
    message = faComments;
    down = faCaretDown;

    constructor () {}

    ngOnInit() {
    }
}
