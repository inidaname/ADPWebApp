import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Candidate } from '../../routes/member-candidates/candidate';
import { config } from 'src/config';

@Injectable({
  providedIn: 'root'
})
export class InterestService {

  private token = localStorage.getItem('token');
  private userId = localStorage.getItem('id');

  constructor(
    private http: HttpClient
  ) {}

  createInterest(data: Candidate) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'authorization': this.token
    });
    const candidate = this.http.post(config.api.api + '/interest/', data, {headers: headers});

    return candidate;
  }

  checkContest() {
    const check = this.http.get(config.api.api + '/interest/member/' + this.userId);
    return check;
  }
}
