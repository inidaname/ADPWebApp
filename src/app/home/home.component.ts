import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from './services/shared/shared.service';
import { ModalService } from './services/modals/modals.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'adpwebapp';
  activateModal = true;
  theState: Boolean = false;
  objectData: object;
  viewAmt: any;
  theRef: number = Math.floor((Math.random() * 1000000000) + 1);
  router: string;

  constructor(
    private route: Router,
    private share: SharedService,
    private modalService: ModalService) {
    this.route.events.subscribe(() => this.router = this.route.url);
  }

  ngOnInit() {
    this.share.currentStatus.subscribe((obj: any) => this.activateModal = obj.state);
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  toggleModal(theCon: string, shwAmt: string) {
    this.objectData = {
      theAmt: theCon,
      viewAmt: shwAmt,
      state: true,
      purpose: 'Donation'
    };
    this.share.changeModalState(this.objectData);
    this.share.triggerState(true);
    this.openModal('app-payment');
    // const Payment = new PaymentComponent(this.share);
    // Payment.ngOnInit();
  }
  // closeModal(event) {
  //   if (event.path[0].classList.contains('modal-container') || event.path[0].id === 'close') {
  //     this.modalActive = true;
  //   }
  // }

}
