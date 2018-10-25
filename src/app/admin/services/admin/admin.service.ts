import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { config } from '../../../../config';
import { IUserData } from 'src/app/home/interface/userData';

@Injectable({
    providedIn: 'root'
})

export class AdminService {
    private token: string = localStorage.getItem('token');
    private id: string  = localStorage.getItem('id');
    constructor(private http: HttpClient) {}
    private headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization': this.token
    });


    getAllUser() {
        const getAll = this.http.get(config.api.api + '/admin/members/', {headers: this.headers});

        return getAll;
    }

    getUserBy(userDetial: string, byWhat: String) {
        let getMember;
        if (byWhat === 'PVC Number') {
           return getMember = this.http.get(config.api.api + '/getwithpvc/' + userDetial, {headers: this.headers});
        }

        if (byWhat === 'Phone Number') {
            return getMember = this.http.get(config.api.api + '/getwithphone/' + userDetial, {headers: this.headers});
        }

        if (byWhat === 'Card Number') {
            return getMember = this.http.get(config.api.api + '"/getwithcard/' + userDetial, {headers: this.headers});
        }
    }

    createContact(contact) {
        const create = this.http.post(config.api.api + '/contact/', contact, {headers: this.headers});
        return create;
    }

    getMessages() {
        const getMessage = this.http.get(config.api.api + '/complain/', {headers: this.headers});
        return getMessage;
    }

}
