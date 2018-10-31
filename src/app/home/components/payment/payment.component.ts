import { Component, OnInit, Input, DoCheck, OnChanges } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { SharedService } from '../../services/shared/shared.service';
import { ModalService } from '../../services/modals/modals.service';
import { PaymentService } from '../../services/payment/payment.service';
import { config } from '../../../../config';
import { Router } from '@angular/router';

@Component({
    selector: 'app-payment',
    templateUrl: './payment.component.html',
    styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
    @Input() id: string;
    private element: any;
    closeX = faTimes;
    paymentForm: FormGroup;
    thisBtn: any;
    theRegRef: number = Math.floor((Math.random() * 1000000000) + 1);
    typeOfPayment: string;
    viewAmount: any;
    purposeFor = 'Donation';
    payName: any;
    memberInst: any;
    payAmount: any;
    payPhone: any;
    payEmail: any;
    purpose: any;
    topMessage: string;
    objectData: any;
    triggedState: boolean;
    payStackKey: string = config.apiKey.paystack_live;

    constructor(
        private share: SharedService,
        private fb: FormBuilder,
        private modalService: ModalService,
        private payment: PaymentService,
        private router: Router
        ) {}

    ngOnInit() {

        // Sharing data between components
        this.share.currentStatus.subscribe((state: any) => {
            this.objectData = state;
            this.payAmount = state.theAmt;
            this.payEmail = state.Email;
            this.payName = state.Name;
            this.purpose = state.purpose;
            this.payPhone = state.Phone;
            this.topMessage = state.topMessage;
            this.viewAmount = state.viewAmt;
            this.memberInst = state.memberInst;
        });
        if (this.router.url === '/register') {
            this.share.currentTrigger.subscribe((state: boolean) => {
                if (state === true) {
                    this.startForm();
                }
            });
        }
        this.paymentForm = this.fb.group({
            payName: ['', Validators.required],
            payEmail: ['', [Validators.required, Validators.email]],
            payAmount: [''],
            payPhone: [''],
            payPurpose: ['']
        });
    }

    startForm() {
        this.paymentForm.controls.payAmount.setValue(this.viewAmount);
        this.paymentForm.controls.payEmail.setValue(this.payEmail);
        this.paymentForm.controls.payPhone.setValue(this.payPhone);
        this.paymentForm.controls.payPurpose.setValue(this.purpose);
        this.paymentForm.controls.payName.setValue(this.payName);
        this.paymentForm.controls.payAmount.disable();
    }


    paymentCancel() {
    }
    paymentDone(event) {
        const paymentData = {
            amount: this.payAmount,
            purpose: this.purpose,
            fullName: this.payName,
            phoneNumber: this.payPhone,
            // message: event.message,
            reference: event.reference,
            status: event.status,
            // trans: event.trans,
            // transaction: event.transaction,
            trxref: event.trxref
        };
        const obs = this.payment.makePayment(paymentData, paymentData.purpose);
        obs.subscribe(res => this.closeModal('app-payment'));
    }

    closeModal(id: string) {
        this.modalService.close(id);
    }
}
