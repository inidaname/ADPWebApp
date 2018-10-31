import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { RegisterService } from '../../services/register/register.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { minimumAge, justOneName } from './singleName.directive';
import { Router, NavigationEnd } from '@angular/router';
import { SharedService } from '../../services/shared/shared.service';
import { ModalService } from '../../services/modals/modals.service';
import { FileUploader, FileUploaderOptions, ParsedResponseHeaders} from 'ng2-file-upload/ng2-file-upload';
import { config } from '../../../../config';
import { IUserData } from '../../interface/userData';
import { HttpErrorResponse } from '@angular/common/http';


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
  member: IUserData;
  formOk = false;
  message: string;
  theRegRef = `ADP${Math.floor((Math.random() * 1000000000) + 1)}`;
  activateModal: boolean;
  objectData: any;
  passportValue = 'https://avatars.io/static/default_128.jpg';
  @ViewChild('picBar') picELement: ElementRef;
  progressBar = ' ';
  public uploader: FileUploader;
  errorMsg: string;

  constructor(
    private fb: FormBuilder,
    private register: RegisterService,
    private router: Router,
    private share: SharedService,
    private modalService: ModalService) {}

  ngOnInit() {
    const uploaderOptions: FileUploaderOptions = {
      url: `${config.api.api}/upload`,
      autoUpload: true
    };
    this.uploader = new FileUploader(uploaderOptions);
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onBuildItemForm = (file: any, form: FormData): any => {
      file.alias = 'passport';
      return { file, form };
    };
    this.uploader.onProgressItem = (progress: any) => {
      this.progressBar = progress['progress'] + '%';
    };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any ) => {
      if (response) {
        const responeded = JSON.parse(response);
         this.passportValue = responeded.url;
        }
     };
    this.formReg = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3), justOneName]],
      pvc: [''],
      phoneNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      residenceAdd: [''],
      stName: ['', Validators.required],
      lgaName: ['', Validators.required],
      wardName: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      dateofBirth: ['', [Validators.required, minimumAge(1)]],
      gender: ['', Validators.required],
      pollingUnit: [''],
      passport: [''],
      idNumber: [this.theRegRef]
    });

    this.share.currentStatus.subscribe((state: any) => this.activateModal = state.state);
    this.router.events.subscribe((evnt) => {
      if (!(evnt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });

    if (localStorage.getItem('token')) {
      this.router.navigate(['/']);
    }
  }

  private uploaderHere() {
  }

  setStateName(event) {
    this.localGovt = [];
    this.wardList = [];
    this.pollingList = [];
    if (event.target.value) {
      const obs = this.register.getLocalGovt(event.target.value);
      obs.subscribe((res: any) => {
        this.localGovt = res;
      });
    }
  }

  clickUpload() {
    this.picELement.nativeElement.click();
  }

  setWardname(event, stateName) {
    this.wardList = [];
    this.pollingList = [];
    if (event.target.value) {
      const obs = this.register.getWard(event.target.value, stateName);
      obs.subscribe((res: any) => {
        this.wardList = res;
      });
    }
  }

  pollingUnits(event, lgaName: string, stateName: string) {
    this.pollingList = [];
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
  regUser(data: IUserData) {
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
        this.share.sendData(data);
        this.router.navigate(['/done']);
        // this.openModal('app-payment');
      } else {
        this.error = true;
      }
    }, (err: HttpErrorResponse) => {
      if (err.status === 401) {
        this.errorMsg = 'The User already exist';
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
    this.errorMsg = '';

    // stop here if form is invalid
    if (this.formReg.invalid) {
      event.preventDefault();
        return;
    }
    this.formReg.value.passport = this.passportValue;
    this.regUser(this.formReg.value);
  }

}
