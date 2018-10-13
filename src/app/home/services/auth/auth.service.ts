import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { config } from '../../../../config';

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    constructor() { }

    logout(): void {
      localStorage.setItem('isLoggedIn', 'false');
      localStorage.removeItem('token');
      localStorage.removeItem('id');
    }
}
