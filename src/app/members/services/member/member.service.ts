import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { config } from '../../../../config';
import { IUserData } from 'src/app/home/interface/userData';

@Injectable({
    providedIn: 'root'
})

export class MemberService {
    private token: string = localStorage.getItem('token');
    private id: string  = localStorage.getItem('id');
    constructor(private http: HttpClient) {}

    getMemberByID() {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'authorization': this.token
        });

        const member = this.http
        .get(config.api.api + '/member/' + this.id, {headers: headers});

        return member;
    }

    getMemberByUName(username: string) {
        const user = this.http
        .get(config.api.api + '/username/' + username);

        return user;
    }
}
