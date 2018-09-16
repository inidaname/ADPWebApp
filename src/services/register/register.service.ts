import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from '../../app/config';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private register: HttpClient) { }
  getLocalGovt(stateName: any) {
    const getState = this.register
    .get(config.oldWeb + '/getLGA?statePlace=' + stateName);
    return getState;
  }

  getWard(lgaName: string, stateName: string) {
    const getWard = this.register
    .get(config.oldWeb + '/getWARD?stateReg=' + stateName + '&lgaReg=' + lgaName);
    return getWard;
  }

  getPolling(wardName: string, lgaName: string, stateName: string) {
    const getPolling = this.register
    .get(config.oldWeb + '/getPolling?stateName=' + stateName + '&localgovtName=' + lgaName + '&wardName=' + wardName);
    return getPolling;
  }

  registerUser(data: object) {
    const regData = this.register
    .post(config.api + '/register', data);
    return regData;
  }
}
