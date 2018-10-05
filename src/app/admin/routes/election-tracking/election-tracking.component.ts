import { Component, OnInit } from '@angular/core';

import { faBars, faComments, faCaretDown, faEllipsisH, faMale } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-election-tracking',
  templateUrl: './election-tracking.component.html',
  styleUrls: ['./election-tracking.component.scss']
})
export class ElectionTrackingComponent implements OnInit {
  threeDots = faEllipsisH;
  male = faMale;
  message = faComments;
  

  constructor() { }

  ngOnInit() {
  }

}
