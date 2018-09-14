import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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
    console.log(this.route);
    
  }
  
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
