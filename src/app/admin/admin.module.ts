import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ChartjsModule } from '@ctrl/ngx-chartjs';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AdminComponent } from './admin.component';
import { ElectionTrackingComponent } from './election-tracking/election-tracking.component';
import { IndexComponent } from './index/index.component';

@NgModule({
  imports: [
    CommonModule,
    ChartjsModule,
    FormsModule,
    FontAwesomeModule,
    RouterModule
  ],
  exports: [
    AdminComponent
  ],
  declarations: [
    AdminComponent,
    ElectionTrackingComponent,
    IndexComponent
  ]
})
export class AdminModule { }
