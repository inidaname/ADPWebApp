import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from '../../config';
import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor(
    private http: HttpClient
  ) { }

  getLocalGovt(stateName: any) {
    const lga = this.http
    .get(config.api.api + '/getlga?stateName=' + stateName);
    const excos = this.http
    .get(config.api.api + '/exco/' + stateName);
    const candidates = this.http
    .get(config.api.api + '/interest/' + stateName);
    const contact = this.http
    .get(config.api.api + '/contact/' + stateName);
    return forkJoin([lga, excos, candidates, contact]);
  }

  getWard(lgaName: string, stateName: string) {
    const wards = this.http
    .get(config.api.api + '/getward?stateName=' + stateName + '&lgaName=' + lgaName);
    const excos = this.http
    .get(config.api.api + '/exco/' + stateName + '/' + lgaName);
    const contact = this.http
    .get(config.api.api + '/contact/lga/' + stateName + '/' + lgaName);
    return forkJoin([wards, excos, contact]);
  }

  getPolling(wardName: string, lgaName: string, stateName: string) {
    const getPolling = this.http
    .get(config.api.api + '/getpollunit?stateName=' + stateName + '&lgaName=' + lgaName + '&wardName=' + wardName);
    return getPolling;
  }

  httpUser(data: object) {
    const regData = this.http
    .post(config.api.api + '/http', data);
    return regData;
  }
}
