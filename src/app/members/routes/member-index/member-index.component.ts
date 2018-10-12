import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-member-index',
    templateUrl: './member-index.component.html',
    styleUrls: ['./member-index.component.scss']
})

export class MemberIndexComponent implements OnInit {
    lat = 9.0442358;
    lng = 7.5100474;
  
    constructor() {}
    ngOnInit() {
    }
}
