import { Component, OnInit } from '@angular/core';
import { faArrowLeft, faRocket, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  arrowleft = faArrowLeft;
  rocket = faRocket;
  plane = faPaperPlane;

  constructor() { }

  ngOnInit() {
  }

}
