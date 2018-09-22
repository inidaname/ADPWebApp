import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from '../../../config';

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
        const login = this.http
            .post(config.api.api + '/login', data);

        return login;
    }
}
