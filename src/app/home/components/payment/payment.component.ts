import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SharedService } from '../../services/shared/shared.service';

@Component({
    selector: 'app-payment',
    templateUrl: './payment.component.html',
    styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
    close = faTimes;
    paymentForm: FormGroup;
    theRegRef: number = Math.floor((Math.random() * 1000000000) + 1);
    typeOfPayment: string;
    openModal = false;
    @Output() closeModalEvent = new EventEmitter();

    constructor(
        private fb: FormBuilder,
        private share: SharedService
    ) {}

    ngOnInit() {
        this.paymentForm = this.fb.group({
            payName: [''],
            payAmount: [''],
            payPhone: [''],
            payEmail: [''],
            purpose: ['']
        });
    this.share.currentStatus.subscribe(state => this.openModal = state);

    }

    paymentCancel(event) {
        console.log(event);
    }
    paymentDone(event) {
        console.log(event);
    }

    closeModals() {
        this.share.changeState(false);
    }

}
