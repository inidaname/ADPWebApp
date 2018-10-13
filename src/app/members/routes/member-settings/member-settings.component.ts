import { Component, OnInit } from '@angular/core';
import { MemberService } from '../../services/member/member.service';

@Component({
  selector: 'app-member-settings',
  templateUrl: './member-settings.component.html',
  styleUrls: ['./member-settings.component.scss']
})
export class MemberSettingsComponent implements OnInit {

  memberDetail: any;
  constructor(private member: MemberService) { }

  ngOnInit() {
    const obs = this.member.getMemberByID();
    obs.subscribe((res: any) => this.memberDetail = res);
  }

}
