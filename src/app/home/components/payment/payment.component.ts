import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { SharedService } from '../../services/shared/shared.service';
import { ModalService } from '../../services/modals/modals.service';

@Component({
    selector: 'app-payment',
    templateUrl: './payment.component.html',
    styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit, DoCheck {
    @Input() id: string;
    private element: any;
    closeX = faTimes;
    paymentForm: FormGroup;
    theRegRef: number = Math.floor((Math.random() * 1000000000) + 1);
    typeOfPayment: string;
    viewAmount: any;
    purposeFor = 'Donation';
    payName: any;
    payAmount: any;
    payPhone: any;
    payEmail: any;
    purpose: any;
    objectData: any;

    constructor(
        private share: SharedService,
        private fb: FormBuilder,
        private modalService: ModalService
        ) {}

    ngOnInit() {

        // Sharing data between components
        this.share.currentStatus.subscribe((state: any) => {
            this.objectData = state;
            this.payAmount = state.theAmt;
            this.payEmail = (state.Email) ? state.Email : 'contact@adp.ng';
            this.payName = state.Name;
            this.purpose = state.purpose;
            this.payPhone = state.Phone;
            this.viewAmount = state.viewAmt;
        });
        this.paymentForm = this.fb.group({
            payName: ['', Validators.required],
            payEmail: ['', Validators.required],
            payAmount: ['', Validators.required],
            payPhone: [''],
            purpose: ['']
        });
    }

    ngDoCheck() {
        this.paymentForm.controls.payAmount.setValue(this.viewAmount);
        this.paymentForm.controls.payEmail.setValue(this.payEmail);
        this.paymentForm.controls.payPhone.setValue(this.payPhone);
        this.paymentForm.controls.purpose.setValue(this.purpose);
        this.paymentForm.controls.payName.setValue(this.payName);
        this.paymentForm.controls.payAmount.disable();
    }


    paymentCancel(event) {
        console.log(event);
    }
    paymentDone(event) {
        console.log(event);
    }

    closeModal(id: string) {
        this.modalService.close(id);
    }
}
