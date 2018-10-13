import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { config } from '../../../../config';

@Injectable({
    providedIn: 'root'
})

export class LoginService {
    constructor (private http: HttpClient) {  }

    logInUser(phone: string, password: string) {
        const data = {
            phoneNumber: phone,
            password: password
        };
        const headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });
        const login = this.http
            .post(config.api.api + '/login', data, {headers});

        return login;
    }
}
