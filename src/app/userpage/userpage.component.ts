import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MemberService } from '../members/services/member/member.service';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.scss']
})
export class UserpageComponent implements OnInit {
  user: object;
  private sub: any;

  constructor(
    private route: ActivatedRoute,
    private userService: MemberService
    ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const obs = this.userService.getMemberByUName(params['user']);
      obs.subscribe(res => {
        this.user = res;
        console.log(res);
      },
      err => console.log(err));
   });
  }

}
