import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChartjsModule } from '@ctrl/ngx-chartjs';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AdminComponent } from './admin.component';
import { ElectionTrackingComponent } from './election-tracking/election-tracking.component';

@NgModule({
  imports: [
    CommonModule,
    ChartjsModule,
    FormsModule,
    FontAwesomeModule
  ],
  exports: [
    AdminComponent
  ],
  declarations: [
    AdminComponent,
    ElectionTrackingComponent
  ]
})
export class AdminModule { }
