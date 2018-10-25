import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UsersService } from '../../services/users/users.service';
import { IUserData } from 'src/app/home/interface/userData';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { FileUploader} from 'ng2-file-upload/ng2-file-upload';
import { Cloudinary } from '@cloudinary/angular-5.x';
import { config } from 'src/config';
import { RegisterService } from 'src/app/home/services/register/register.service';
import { MemberService } from '../../services/member/member.service';

@Component({
  selector: 'app-member-settings',
  templateUrl: './member-settings.component.html',
  styleUrls: ['./member-settings.component.scss']
})
export class MemberSettingsComponent implements OnInit {

  memberDetail: IUserData;
  editInit: boolean;
  editBtn: string;
  passportValue: string;
  progressBar: string;
  localGovt: any;
  wardList: any;
  pollingList: any;
  editProfile: FormGroup;
  public uploader: FileUploader = new FileUploader({url: config.api.cloudinary});
  @ViewChild('picBar') picELement: ElementRef;
  @ViewChild('thisImg') thisImg: ElementRef;
  state = ['ABIA', 'ADAMAWA', 'AKWA IBOM', 'ANAMBRA', 'BAUCHI',
  'BAYELSA', 'BENUE', 'BORNO', 'CROSS RIVER', 'DELTA', 'EBONYI', 'EDO', 'EKITI',
  'ENUGU', 'FCT', 'GOMBE', 'IMO', 'JIGAWA', 'KADUNA', 'KANO', 'KATSINA', 'KEBBI', 'KOGI',
  'KWARA', 'LAGOS', 'NASARAWA', 'NIGER', 'OGUN', 'ONDO', 'OSUN', 'OYO', 'PLATEAU', 'RIVERS',
   'SOKOTO', 'TARABA', 'YOBE', 'ZAMFARA'];

  constructor(
    private userService: UsersService,
    private cloudinary: Cloudinary,
    private register: RegisterService,
    private fb: FormBuilder,
    private member: MemberService
    ) { }

  ngOnInit() {
    this.editInit = false;
    this.editBtn = 'Edit Profile';
    this.userService.currentUserData.subscribe((res: IUserData) => {
      this.memberDetail = res;
    });
  }

  setItUp() {
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onBuildItemForm = (file: any, form: FormData): any => {

      // Add Cloudinary's unsigned upload preset to the upload form
      form.append('upload_preset', this.cloudinary.config().upload_preset);

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
  }

  EditProfile() {

    if (this.editInit === false) {
      this.setItUp();
      this.editInit = true;
      this.editBtn = 'Save Profile';
      this.editProfile = this.fb.group({
        passport: [this.memberDetail.passport],
        fullName: [this.memberDetail.fullName, Validators.required],
        username: [this.memberDetail.username, Validators.required],
        pvc: [this.memberDetail.pvc, Validators.required],
        stName: [this.memberDetail.stateName, Validators.required],
        Senatorial: [this.memberDetail.Senatorial],
        FedConstituency: [this.memberDetail.FedConstituency],
        StateConstituency: [this.memberDetail.StateConstituency],
        lgaName: [this.memberDetail.lgaName, Validators.required],
        wardName: [this.memberDetail.wardName, Validators.required],
        pollingUnit: [this.memberDetail.pollingUnit],
      });
    } else {
      this.member.upDateMember(this.editProfile.value).subscribe((res: IUserData) => {
        this.userService.changeUserData(res);
        this.editInit = true;
        this.editBtn = 'Save Profile';
      });
    }
  }

  clickUpload() {
    this.picELement.nativeElement.click();
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


}
