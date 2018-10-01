import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from '../../../config';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  constructor(
    private http: HttpClient
  ) { }
  getCandidatesByState(state: string) {
    return this.http.get(config.api.api + '/interest/' + state);
  }

  getCandidatesByPosition(position: string) {
    return this.http.get(config.api.api + '/interest/' + position);
  }

  getCandidatesByPositionInState(state: string, position: string) {
    return this.http.get(config.api.api + '/interest/' + state + '/' + position);
  }
}
