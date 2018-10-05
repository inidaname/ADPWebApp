import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../services/register/register.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { minimumAge, justOneName } from './singleName.directive';
import { Router, NavigationEnd } from '@angular/router';
import { SharedService } from '../../services/shared/shared.service';
import { ModalService } from '../../services/modals/modals.service';
import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
import { Observable } from 'rxjs';
import { Cloudinary } from '@cloudinary/angular-5.x';
import { config } from '../../../../config';

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
  passportValue: string = null;
  public uploader: FileUploader = new FileUploader({url: config.api.cloudinary});

  constructor(
    private cloudinary: Cloudinary,
    private fb: FormBuilder,
    private register: RegisterService,
    private router: Router,
    private share: SharedService,
    private modalService: ModalService) {}

  ngOnInit() {
    this.uploader.onBuildItemForm = (fileItem: any, form: FormData): any => {
      // Add Cloudinary's unsigned upload preset to the upload form
      form.append('adpnigeria', this.cloudinary.config().upload_preset);
      return { fileItem, form };
    };
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      if (response) {
         this.passportValue = response.url;
      }
     };
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
      pollingUnit: [''],
      passport: [this.passportValue]
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

  clickUpload() {
    document.getElementById('passport').click();
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
          idNum: Math.floor((Math.random() * 1000000000) + 1),
          Email: data.email,
          Name: data.fullName,
          Phone: data.phoneNumber,
          state: true,
          purpose: 'Membership Registration',
          topMessage: 'Membership Online Payment',
          memberInst: 'Membership Registration is N100 only'
        };
        this.share.changeModalState(this.objectData);
        this.share.sendData(res.user);
        // this.openModal('app-payment');
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
