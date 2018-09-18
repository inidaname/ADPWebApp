import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from '../../app/config';

@Injectable({
    providedIn: 'root'
})

export class ContactService {
    constructor(private http: HttpClient) {}

    sendMessage(content: any) {
        const send = this.http
        .post(config.api + '/message', content);
        return send;
    }
}
