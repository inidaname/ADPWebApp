import { Component, OnInit } from '@angular/core';
import { faArrowLeft, faRocket, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.scss']
})
export class MissionComponent implements OnInit {

  arrowleft = faArrowLeft;
  rocket = faRocket;
  plane = faPaperPlane;
  constructor() { }

  ngOnInit() {
  }

}
