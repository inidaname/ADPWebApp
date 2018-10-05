import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared/shared.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.scss']
})
export class DoneComponent implements OnInit {

  userData: any = null;

  constructor(
    private share: SharedService,
    private router: Router
  ) {}

  ngOnInit() {
    this.share.currentData.subscribe((res: any) => {
      this.userData = res;
    });

    if (this.userData == null) {
      this.router.navigate(['/register']);
    }
  }

}
