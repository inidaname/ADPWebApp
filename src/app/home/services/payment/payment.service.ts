import { HttpClient, HttpHeaders } from '@angular/common/http';
import { config } from '../../../config';

export class PaymentService {
    constructor(
        private http: HttpClient,
        private token
    ) {}

    makePayment(body: Object, type: String) {
        const headers = new HttpHeaders;
        const theToken = (type === 'donation') ? null : headers.append('token', this.token);
        const postPay = this.http.post(config.api.api + '/' + type, body, {headers: theToken});
        return postPay;
    }
}
