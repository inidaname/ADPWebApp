import { Component, OnInit } from '@angular/core';
import { faTwitter, faFacebook, faInstagram, faMedium } from '@fortawesome/free-brands-svg-icons';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';

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
  constructor() { }

  ngOnInit() {
  }


}
