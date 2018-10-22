import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MemberService } from '../members/services/member/member.service';
import { StateService } from './state.service';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.scss']
})
export class UserpageComponent implements OnInit {
  user: object;
  lgas: any;
  contact: any;
  candidate: any;
  excos: any;
  chairmanImg = '/assets/adplogo.jpg';
  prad: string;
  number: number;
  place: string;
  wards: any;
  @ViewChild('localGovt') localGovt: ElementRef;
  states: Array<string> = ['ABIA', 'ADAMAWA', 'AKWA IBOM', 'ANAMBRA', 'BAUCHI',
  'BAYELSA', 'BENUE', 'BORNO', 'CROSS RIVER', 'DELTA', 'EBONYI', 'EDO', 'EKITI',
  'ENUGU', 'FCT', 'GOMBE', 'IMO', 'JIGAWA', 'KADUNA', 'KANO', 'KATSINA', 'KEBBI', 'KOGI',
  'KWARA', 'LAGOS', 'NASARAWA', 'NIGER', 'OGUN', 'ONDO', 'OSUN', 'OYO', 'PLATEAU', 'RIVERS',
  'SOKOTO', 'TARABA', 'YOBE', 'ZAMFARA'];
  private sub: any;
  setState = false;

  constructor(
    private route: ActivatedRoute,
    private userService: MemberService,
    private stateService: StateService
    ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe((params: Array<string>) => {
      this.prad = params['user'];
      if (this.states.includes(this.prad.toUpperCase())) {
        this.setState = true;
        this.getLocalGvtCont();
      } else {
        const obs = this.userService.getMemberByUName(params['user']);
        obs.subscribe(res => {
          this.user = res;
          console.log(res);
        },
        err => console.log(err));
      }
   });
  }

  getLocalGvtCont() {
    const obs = this.stateService.getLocalGovt(this.prad.toUpperCase());
    obs.subscribe(res => {
      this.lgas = res[0];
      this.contact = res[3];
      this.candidate = res[2];
      this.excos = res[1];
      this.number = this.lgas.length;
      this.place = 'Number of LGA:';
      console.log(this.excos);
    },
    error => console.log(error));
  }

  getWardCon() {
    const obs = this.stateService.getWard(this.localGovt.nativeElement.value, this.prad.toUpperCase());
    obs.subscribe((res: any) => {
      this.wards = res[0];
      this.contact = res[2];
      this.number = this.wards.length;
      this.place = 'Number of Ward:';
  });
  }
}
