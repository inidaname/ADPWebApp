import { Component, OnInit } from '@angular/core';
import { faTwitter, faFacebook, faInstagram, faMedium, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import { UsersService } from 'src/app/members/services/users/users.service';

@Component({
  selector: 'app-head-bar',
  templateUrl: './head-bar.component.html',
  styleUrls: ['./head-bar.component.scss']
})
export class HeadBarComponent implements OnInit {

  facebook = faFacebook;
  twitter = faTwitter;
  instagram = faInstagram;
  medium = faMedium;
  bars = faBars;
  search = faSearch;
  youtube = faYoutube;
  isLoggedIn = false;

  navOpen = true;

  constructor (
    private LoggedIn: UsersService
  ) {}

  ngOnInit() {
    this.LoggedIn.LoggedIn.subscribe((status: boolean) => {
      this.isLoggedIn = status;
    });
  }

  toggleMenu() {
    this.navOpen = !this.navOpen;
  }


}
