import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUserData } from 'src/app/home/interface/userData';
import { UsersService } from '../../services/users/users.service';
import { InterestService } from '../../services/interest/interest.service';
import { Candidate } from './candidate';
import { HttpHeaderResponse } from '@angular/common/http';

@Component({
  selector: 'app-member-candidates',
  templateUrl: './member-candidates.component.html',
  styleUrls: ['./member-candidates.component.scss']
})
export class MemberCandidatesComponent implements OnInit {

  pickingForm: string;
  PubexpressOfIn: FormGroup;
  ExoForm: FormGroup;
  userData: IUserData;
  readOnly: boolean;
  contesting: boolean;

  constructor(
    private fb: FormBuilder,
    private member: UsersService,
    private interest: InterestService
  ) { }

  ngOnInit() {
    this.readOnly = false;
    this.member.currentUserData.subscribe((res: IUserData) => {
      if (res !== null) {
        this.userData = res;
        this.readOnly = true;
      }
    });

    this.checkUser();
  }

  checkUser() {
    this.interest.checkContest().subscribe((res: Candidate) => {
      this.contesting = true;
    }, (err: HttpHeaderResponse) => {
      if (err.status === 404) {
        this.contesting = false;
      }
    });
  }

  pickForm(form: string) {
    if (form === 'electoral') {
      this.PubexpressOfIn = this.fb.group({
        contestant: [this.userData._id],
        position: ['', Validators.required],
        candidateName: [this.userData.fullName, Validators.required],
        voterCard: [this.userData.pvc, Validators.required],
        maritalStatus: ['', Validators.required],
        withKids: ['', Validators.required],
        addressCand: [this.userData.residenceAdd, Validators.required],
        eduLevel: ['', Validators.required],
        secondarySch: ['', Validators.required],
        highInstitute: [''],
        SechighInstitute: [''],
        placeofwork: [''],
        posterPic: [''],
        positionofwork: [''],
        stateName: [this.userData.stateName],
        lgaName: [this.userData.lgaName],
        category: ['Public Office']
      });
    } else if (form === 'exco') {
      this.ExoForm = this.fb.group({
        contestant: [this.userData._id],
        candidateName: [this.userData.fullName, Validators.required],
        voterCard: [this.userData.pvc, Validators.required],
        addressCand: [this.userData.residenceAdd, Validators.required],
        stateName: [this.userData.stateName],
        lgaName: [this.userData.lgaName],
        position: ['', Validators.required],
        level: ['', Validators.required],
        maritalStatus: ['', Validators.required],
        withKids: ['', Validators.required],
        eduLevel: ['', Validators.required],
        secondarySch: [''],
        highInstitute: [''],
        SechighInstitute: [''],
        placeofwork: [''],
        positionofwork: [''],
        posterPic: [''],
        category: ['Party Exco']
      });
    }

    this.pickingForm = form;
  }

  onSubmit(type: string) {
    if (type === 'exco') {
      this.interest.createInterest(this.ExoForm.value).subscribe((res: any) => {
        this.contesting = true;
        this.checkUser();
      });
    } else if (type === 'electoral') {
      this.interest.createInterest(this.PubexpressOfIn.value).subscribe((res: any) => {
        this.contesting = true;
        this.checkUser();
      });

    }
  }

}
