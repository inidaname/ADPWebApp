import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.scss']
})
export class AboutSectionComponent implements OnInit {

  iniCon: boolean;
  constructor(private router: Router, ) {
    console.log(this.router.url);
  }

  ngOnInit() {
    if (this.router.url === '/') {
      this.iniCon = true;
    }
  }

}
