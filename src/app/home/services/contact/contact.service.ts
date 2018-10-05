import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from '../../../../config';

@Injectable({
    providedIn: 'root'
})

export class ContactService {
    constructor(private http: HttpClient) {}

    sendMessage(content: any) {
        const send = this.http
            .post(config.api.api + '/message', content);
        return send;
    }
}
