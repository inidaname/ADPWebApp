import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'adpwebapp';
  modalActive = true;
  theAmt: String;
  theState: Boolean = false;
  theemail: any;
  viewAmt: any;
  theRef: number = Math.floor((Math.random() * 1000000000) + 1);
  router: string;

  constructor (private route: Router) {
    this.route.events.subscribe(() => this.router = this.route.url );
  }

  ngOnInit() {}

  toggleModal(theCon: String, shwAmt: any,  theSt: Boolean) {
    this.modalActive = !this.modalActive;
    this.theAmt = theCon;
    this.theState = theSt;
    this.viewAmt = shwAmt;
  }
  closeModal(event) {
    if (event.path[0].classList.contains('modal-container')) {
      this.modalActive = true;
    }
  }

}
