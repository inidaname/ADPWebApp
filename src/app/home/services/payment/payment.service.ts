import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { config } from '../../../config';

@Injectable({
    providedIn: 'root'
})

export class PaymentService {
    constructor(
        private http: HttpClient,
    ) {}

    makePayment(body: any, type: String) {
        const headers = new HttpHeaders;
        const theToken = (type === 'donation') ? null : null;
        const theType = (type === 'donation') ? 'donation' : 'payment';
        const postPay = this.http.post(config.api.api + '/' + theType, body);
        return postPay;
    }
}
