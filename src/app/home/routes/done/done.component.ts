import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared/shared.service';
import { Router, NavigationEnd } from '@angular/router';
import { ModalService } from '../../services/modals/modals.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.scss']
})
export class DoneComponent implements OnInit {

  userData: any = null;
  regPayment: FormGroup;
  payMent: any;
  amountDue: number;
  objectData: any;
  activateModal: any;

  constructor(
    private share: SharedService,
    private router: Router,
    private modal: ModalService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.share.currentStatus.subscribe((obj: any) => this.activateModal = obj.state);
    this.payMent = 'Please Select Purpose and Fee';
    this.regPayment = this.fb.group({
      forPurpose: ['', Validators.required],
      monthly: ['', Validators.required],
      amountPaid: ['']
    });

    this.share.currentData.subscribe((res: any) => {
      this.userData = res;
    });

    if (this.userData == null) {
      this.router.navigate(['/register']);
    }
  }

  openModal(id: string) {
    this.modal.open(id);
  }
  changeValue() {
    if (this.regPayment.controls.monthly.value === '3 months') {
      this.payMent = 250;
      this.amountDue = 25000;
    } else if (this.regPayment.controls.monthly.value === '6 months') {
      this.payMent = 400;
      this.amountDue = 40000;
    } else if (this.regPayment.controls.monthly.value === '12 months') {
      this.payMent = 700;
      this.amountDue = 70000;
    }
  }

  MakePayment() {
    this.objectData = {
      theAmt: this.amountDue,
      viewAmt: this.payMent,
      Name: this.userData.fullName,
      Phone: this.userData.phoneNumber,
      Email: this.userData.email,
      state: true,
      purpose: `${this.regPayment.controls.forPurpose.value} with ${this.regPayment.controls.monthly.value} fees`
    };
    this.share.changeModalState(this.objectData);
    // this.share.triggerState(true);
    this.openModal('app-payment');
  }
}
