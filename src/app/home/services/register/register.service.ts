import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from '../../../../config';
import { IUserData } from '../../interface/userData';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private register: HttpClient) { }
  getLocalGovt(stateName: any) {
    const getState = this.register
    .get(config.api.api + '/getlga?stateName=' + stateName);
    return getState;
  }

  getWard(lgaName: string, stateName: string) {
    const Wards = this.register
    .get(config.api.api + '/getward?stateName=' + stateName + '&lgaName=' + lgaName);
    return Wards;
  }

  getPolling(wardName: string, lgaName: string, stateName: string) {
    const getPolling = this.register
    .get(config.api.api + '/getpollunit?stateName=' + stateName + '&lgaName=' + lgaName + '&wardName=' + wardName);
    return getPolling;
  }

  registerUser(data: IUserData) {
    const regData = this.register
    .post(config.api.api + '/register', data);
    return regData;
  }
}
