import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../services/register/register.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { minimumAge, justOneName } from './singleName.directive';
import { Router, NavigationEnd } from '@angular/router';
import { SharedService } from '../../services/shared/shared.service';
import { ModalService } from '../../services/modals/modals.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  formReg: FormGroup;
  state = ['ABIA', 'ADAMAWA', 'AKWA IBOM', 'ANAMBRA', 'BAUCHI',
  'BAYELSA', 'BENUE', 'BORNO', 'CROSS RIVER', 'DELTA', 'EBONYI', 'EDO', 'EKITI',
  'ENUGU', 'FCT', 'GOMBE', 'IMO', 'JIGAWA', 'KADUNA', 'KANO', 'KATSINA', 'KEBBI', 'KOGI',
  'KWARA', 'LAGOS', 'NASARAWA', 'NIGER', 'OGUN', 'ONDO', 'OSUN', 'OYO', 'PLATEAU', 'RIVERS',
   'SOKOTO', 'TARABA', 'YOBE', 'ZAMFARA'];
  localGovt: any;
  wardList: any;
  pollingList: any;
  submitted = false;
  error = false;
  registered = false;
  member: any;
  formOk = false;
  message: string;
  theRegRef: number = Math.floor((Math.random() * 1000000000) + 1);
  activateModal: boolean;
  objectData: any;


  constructor(
    private fb: FormBuilder,
    private register: RegisterService,
    private router: Router,
    private share: SharedService,
    private modalService: ModalService) {}

  ngOnInit() {
    this.formReg = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3), justOneName]],
      pvc: [''],
      phoneNumber: ['', Validators.required],
      email: [''/*, Validators.email('ad@k.l')*/],
      residenceAdd: [''],
      stateName: ['', Validators.required],
      lgaName: ['', Validators.required],
      wardName: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      dateofBirth: ['', [Validators.required, minimumAge(18)]],
      gender: ['', Validators.required],
      pollingUnit: ['']
    });

    this.share.currentStatus.subscribe((state: any) => this.activateModal = state.state);
    this.router.events.subscribe((evnt) => {
      if (!(evnt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
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

  openModal(id: string) {
    this.modalService.open(id);
  }


  // finally register user
  regUser(data: any) {
    const obs = this.register.registerUser(data);
    obs.subscribe((res: any) => {
      if (res.message) {
        this.registered = true;
        this.member = res.body;
        this.objectData = {
          Email: data.email,
          Name: data.fullName,
          Phone: data.phoneNumber,
          user: data._id,
          state: true,
          purpose: 'Membership Registration'
        };
        this.share.changeModalState(this.objectData);
        this.openModal('app-payment');
      } else {
        this.error = true;
      }
    });
  }

  closeModal(event) {
    if (event.path[0].classList.contains('modal-container') || event.path[0].id === 'close') {
      this.registered = false;
    }
  }


  get f() { return this.formReg.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.formReg.invalid) {
      event.preventDefault();
        return;
    }

    this.regUser(this.formReg.value);
  }

}
