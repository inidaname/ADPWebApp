import { Component, OnInit } from '@angular/core';
import { MemberService } from './services/member/member.service';

@Component({
  selector: 'app-member',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {

  memberDetail: any;

  constructor(private member: MemberService) { }

  ngOnInit() {
    const obs = this.member.getMemberByID();
    obs.subscribe((member: any) => {
      this.memberDetail = member;
      console.log(this.memberDetail)
    });
  }

}
