import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../home/services/auth/auth.service';


@Component({
    selector: 'app-side-menu',
    templateUrl: './side-menu.component.html',
    styleUrls: ['./side-menu.component.scss']
})

export class SideMuneComponent implements OnInit {
    constructor(
        private logout: AuthService,
    ) {}

    ngOnInit() {
    }
    userLogout() {
        this.logout.logout();
    }
}
