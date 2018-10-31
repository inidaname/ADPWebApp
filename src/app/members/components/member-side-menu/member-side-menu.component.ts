import { Component, OnInit, ViewChild, ElementRef, Input, DoCheck} from '@angular/core';
import { faBars, faComments, faTimes } from '@fortawesome/free-solid-svg-icons';
import { MembersComponent } from '../../members.component';
import { Observable, ObservableLike } from 'rxjs';
import { AuthService } from '../../../home/services/auth/auth.service';
import { Router } from '@angular/router';
import { MemberService } from '../../services/member/member.service';
import { IUserData } from '../../../home/interface/userData';
import { UsersService } from '../../services/users/users.service';
import { AdminStatus } from 'src/app/admin/services/admin-status/admin-status.service';
import { RegisterService } from 'src/app/home/services/register/register.service';
import { FormGroup, FormBuilder, Validators, NgModel } from '@angular/forms';
import { AdminService } from 'src/app/admin/services/admin/admin.service';
import { AdminMember } from 'src/app/admin/Interface/admin';

@Component({
    selector: 'app-member-side-menu',
    templateUrl: './member-side-menu.component.html',
    styleUrls: ['./member-side-menu.component.scss']
})

export class MemberSideMenuComponent implements OnInit {

    bars = faBars;
    message = faComments;
    close = faTimes;
    proPic = '/assets/adplogo.jpg';
    fullName = 'ADP Member';
    adminLevel: boolean;
    memberSince: Date;
    stateName: string;
    requested: boolean;
    lgaName: string;
    wardName: string;
    pollingUnit: string;
    checkPlace: NgModel;
    needLoading: boolean;
    deleteBtn: boolean;
    @ViewChild('Modal') Modal: ElementRef;
    @ViewChild('sideMenu') sideMenu: ElementRef;
    @ViewChild('topSide') topSide: ElementRef;
    statesList = ['ABIA', 'ADAMAWA', 'AKWA IBOM', 'ANAMBRA', 'BAUCHI',
    'BAYELSA', 'BENUE', 'BORNO', 'CROSS RIVER', 'DELTA', 'EBONYI', 'EDO', 'EKITI',
    'ENUGU', 'FCT', 'GOMBE', 'IMO', 'JIGAWA', 'KADUNA', 'KANO', 'KATSINA', 'KEBBI', 'KOGI',
    'KWARA', 'LAGOS', 'NASARAWA', 'NIGER', 'OGUN', 'ONDO', 'OSUN', 'OYO', 'PLATEAU', 'RIVERS',
     'SOKOTO', 'TARABA', 'YOBE', 'ZAMFARA'];
     localGovt: Array<any> = [];
     wardList: Array<any> = [];
     pollingList: Array<any> = [];
     adminRequest: FormGroup;
     modalView: boolean;
     phoneNumber: number;
     returnMsg: string;
     deleteMe: boolean;

    constructor(
        private logout: AuthService,
        private router: Router,
        private userService: UsersService,
        private adminStatus: AdminStatus,
        private register: RegisterService,
        private adminService: AdminService,
        private fb: FormBuilder
    ) {}

    ngOnInit() {
        this.requested = false;
        this.modalView = false;
        this.adminLevel = false;
        this.userService.currentUserData.subscribe((res: IUserData) => {
            this.proPic = res.passport;
            this.fullName = res.fullName;
            this.memberSince = res.dateCreated;
            this.stateName = res.stateName;
            this.lgaName = res.lgaName;
            this.wardName = res.wardName;
            this.pollingUnit = res.pollingUnit;
            this.phoneNumber = res.phoneNumber;
            if (res.adminLevel === 'admin') {
                this.adminLevel = true;
                this.adminStatus.setAdminStatus(true);
            } else {
                this.adminLevel = false;
                this.adminStatus.setAdminStatus(false);
            }
        });
        this.checkAdmin();
        this.adminRequest = this.fb.group({
            level: ['', Validators.required],
            stateName: [''],
            lgaName: [''],
            wardName: [''],
            pollingUnit: [''],
        });
    }

    checkAdmin() {
        this.needLoading = true;
        this.adminService.requestStatus().subscribe((res: AdminMember) => {
            if (res && res.approve === false) {
                this.returnMsg = 'Your request is yet to be apporved, If you feel it is taking too much time contact the Party Office.';
                this.requested = true;
                this.needLoading = false;
            }
        }, (err) => {
            if (err.status === 404) {
                this.needLoading = false;
                this.requested = false;
            }
        });
    }

    deleteRequest() {
        this.needLoading = true;
        this.adminService.deleteAdmin().subscribe((res: any) => {
            if (res.status === 200) {
                this.needLoading = false;
                this.returnMsg = 'Your Admin Request was successfully deleted';
                this.deleteMe = false;
            }
        });
    }

    goToAdmin() {
        this.modalView = false;
        this.deleteMe = false;
        if (this.adminLevel === false) {
            this.checkAdmin();
            this.modalView = true;
        } else {
            this.router.navigate(['/admin']);
        }
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


    moveSide() {
        if (this.sideMenu.nativeElement.classList.contains('checkMe')) {
            this.sideMenu.nativeElement.style.width = '0px';
            this.topSide.nativeElement.style.marginLeft = '10px';
            this.sideMenu.nativeElement.classList.remove('checkMe');
        } else {
            this.sideMenu.nativeElement.style.width = '260px';
            this.topSide.nativeElement.style.marginLeft = '270px';
            this.sideMenu.nativeElement.classList.add('checkMe');
        }
    }
    userLogout() {
        this.logout.logout();
        this.userService.changeLoggedIn(false);
        this.router.navigate(['/']);
    }

    get f() { return this.adminRequest.controls; }

    ngSubmit() {
        this.needLoading = true;
        if (this.adminRequest.invalid) {
            return ;
        }
        let data: any = {};
        if (!this.checkPlace) {
            data.phoneNumber = this.phoneNumber;
            data.stateName = this.stateName;
            data.lgaName = this.lgaName;
            data.wardName = this.wardName;
            data.pollingUnit = this.pollingUnit;
            data.level = this.adminRequest.value.level;
        } else {
            data = this.adminRequest;
            data.phoneNumber = this.phoneNumber;
        }
        this.adminService.requestAdmin(data).subscribe((res: any) => {
            this.needLoading = false;
            this.requested = true;
            return this.returnMsg = res.message;
        });
    }

    closeIt(event) {
        if (event === 'closeMe' || event.target.classList.contains('thisModal')) {
            this.modalView = false;
        }
    }

}
