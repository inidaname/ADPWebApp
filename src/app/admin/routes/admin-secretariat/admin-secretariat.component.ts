import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/home/services/register/register.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AdminService } from '../../services/admin/admin.service';
import { HttpErrorResponse } from '@angular/common/http';
import { AdminStatus } from '../../services/admin-status/admin-status.service';
import { AdminMember } from '../../Interface/admin';

@Component({
  selector: 'app-admin-secretariat',
  templateUrl: './admin-secretariat.component.html',
  styleUrls: ['./admin-secretariat.component.scss']
})
export class AdminSecretariatComponent implements OnInit {

  states = ['ABIA', 'ADAMAWA', 'AKWA IBOM', 'ANAMBRA', 'BAUCHI',
  'BAYELSA', 'BENUE', 'BORNO', 'CROSS RIVER', 'DELTA', 'EBONYI', 'EDO', 'EKITI',
  'ENUGU', 'FCT', 'GOMBE', 'IMO', 'JIGAWA', 'KADUNA', 'KANO', 'KATSINA', 'KEBBI', 'KOGI',
  'KWARA', 'LAGOS', 'NASARAWA', 'NIGER', 'OGUN', 'ONDO', 'OSUN', 'OYO', 'PLATEAU', 'RIVERS',
   'SOKOTO', 'TARABA', 'YOBE', 'ZAMFARA'];
   localGovt;
   wardList;
   pollingList;
   contactCreate: FormGroup;
   sent = '';
   err = '';
   inActiveAdmins: Array<AdminMember> = [];

  constructor(
    private register: RegisterService,
    private fb: FormBuilder,
    private admin: AdminService,
    private adminStatus: AdminStatus
  ) { }

  ngOnInit() {
    this.contactCreate = this.fb.group({
      adminInfo: [localStorage.getItem('id')],
      officeNo: [''],
      officeEmail: [''],
      level: [''],
      state: [''],
      lga: [''],
      ward: [''],
      address: ['']
    });

    this.adminStatus.adminInActive.subscribe((res: Array<AdminMember>) => {
      this.inActiveAdmins = res;
      console.log(res)
    })
  }

  setStateName(event) {
    if (event.target.value) {
      const obs = this.register.getLocalGovt(event.target.value);
      obs.subscribe((res: any) => {
        this.localGovt = res;
      });
    }
  }
  setWardname(event, stateName) {
    if (event.target.value) {
      const obs = this.register.getWard(event.target.value, stateName);
      obs.subscribe((res: any) => {
        this.wardList = res;
      });
    }
  }

  pollingUnits(event, lgaName: string, stateName: string) {
    if (event.target.value) {
      const obs = this.register.getPolling(event.target.value, lgaName, stateName);
      obs.subscribe((res: any) => {
        this.pollingList = res;
      });
    }
  }

  sendContact() {
    this.err = '';
    this.sent = '';
    this.admin.createContact(this.contactCreate.value).subscribe((res) => {
      this.sent = 'Successfully Created';
      this.contactCreate.reset();
    }, (err: HttpErrorResponse) => {
      if (err.status) {
        this.err = 'State already exist';
      }
    });
  }

}
