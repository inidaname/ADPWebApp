import { Component, OnInit } from '@angular/core';

import { faBars, faComments, faCaretDown, faEllipsisH, faMale } from '@fortawesome/free-solid-svg-icons';
import { AdminService } from '../../services/admin/admin.service';
import { IUserData } from 'src/app/home/interface/userData';
import * as moment from 'moment';

@Component({
    selector: 'app-admin-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss']
})

export class IndexComponent implements OnInit {


    bars = faBars;
    message = faComments;
    down = faCaretDown;
    threeDots = faEllipsisH;
    male = faMale;
    total = 0;
    memFemale: Array<IUserData> = [];
    memMale: Array<IUserData> = [];
    young: Array<IUserData> = [];
    old: Array<IUserData> = [];
    nowTime = moment.now();
    states = ['AB', 'AD', 'AI', 'AN', 'BA',
    'BY', 'BE', 'BO', 'CR', 'DE', 'EB', 'ED', 'EK',
    'EN', 'FCT', 'GO', 'IM', 'JI', 'KD', 'KN', 'KT', 'KB', 'KG',
    'KR', 'LA', 'NA', 'NI', 'OG', 'ON', 'OS', 'OY', 'PL', 'RI',
     'SK', 'TR', 'YB', 'ZA'];

    data: object = {};
    ageDis: object = {};
    member = {
      labels: ['AB', 'AD', 'AI', 'AN', 'BA',
      'BY', 'BE', 'BO', 'CR', 'DE', 'EB', 'ED', 'EK',
      'EN', 'FCT', 'GO', 'IM', 'JI', 'KD', 'KN', 'KT', 'KB', 'KG',
      'KR', 'LA', 'NA', 'NI', 'OG', 'ON', 'OS', 'OY', 'PL', 'RI',
       'SK', 'TR', 'YB', 'ZA'],
      datasets: [
        {
          label: 'Distribution According to State',
          // tslint:disable-next-line:max-line-length
          data: [12, 72, 81, 90, 12, 45, 12, 21, 82, 74, 67, 89, 90, 63, 15, 51, 87, 45, 78, 10, 12, 21, 16, 83, 98, 18, 92, 54, 77, 32, 14, 45, 67, 54, 45],
          fill: false,
          backgroundColor: [
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(54, 162, 235, 0.2)'
          ],
          borderColor: [
            'rgba(54, 162, 235, 1)',
            'rgba(255,99,132,1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255,99,132,1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255,99,132,1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255,99,132,1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255,99,132,1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255,99,132,1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255,99,132,1)',
          ],
          borderWidth: 1,
        },
      ],
    };


    constructor(
      private adminRights: AdminService
    ) {}

    ngOnInit() {
      this.adminRights.getAllUser().subscribe((res: Array<IUserData>) => {
        this.total = res.length;
        res.forEach((v: IUserData) => {
          if (v.gender === 'female') {
            this.memFemale.push(v);
          }
          if (v.gender === 'male') {
            this.memMale.push(v);
          }
          if (moment().diff(v.dateofBirth, 'years') - this.nowTime <= 38) {
              this.young.push(v);
          }

          if (moment().diff(v.dateofBirth, 'years') >= 39) {
            this.old.push(v);
          }
        });

        this.data = {
          labels: ['Male', 'Female'],
          datasets: [
            {
              label: 'Female and Male members',
              data: [this.memMale.length, this.memFemale.length],
              fill: true,
              backgroundColor: [
                '#4BA0FD',
                '#030D42',
              ],
              borderColor: [
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
              ],
              borderWidth: 0,
            },
          ]
        };
        this.ageDis = {
          labels: ['Youth', 'Old'],
          datasets: [
            {
              label: 'Female and Male members',
              data: [this.young.length, this.old.length],
              fill: true,
              backgroundColor: [
                '#4BA0FD',
                '#030D42',
              ],
              borderColor: [
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
              ],
              borderWidth: 0,
            },
          ]
        };
      });
    }
}
