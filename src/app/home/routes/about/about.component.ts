import { Component, OnInit } from '@angular/core';
import { faArrowLeft, faRocket, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  arrowleft = faArrowLeft;
  rocket = faRocket;
  plane = faPaperPlane;

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((evnt) => {
      if (!(evnt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }

  btnClick (route: string) {
    this.router.navigateByUrl(route);
  }

  getFile(fileLink: string) {
    location.href = fileLink;
  }

}
