import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ChartjsModule } from '@ctrl/ngx-chartjs';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AdminComponent } from './admin.component';
import { ElectionTrackingComponent } from './routes/election-tracking/election-tracking.component';
import { IndexComponent } from './routes/index/index.component';
import { SideMuneComponent } from './components/side-menu/side-menu.component';
import { TopProfileComponent } from './components/top-profile/top-profile.component';
import { AdminManagementComponent } from './routes/admin-management/admin-management.component';
import { AdminMessagesComponent } from './routes/admin-messages/admin-messages.component';
import { AdminSecretariatComponent } from './routes/admin-secretariat/admin-secretariat.component';

@NgModule({
  imports: [
    CommonModule,
    ChartjsModule,
    FormsModule,
    FontAwesomeModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    AdminComponent
  ],
  declarations: [
    AdminComponent,
    ElectionTrackingComponent,
    IndexComponent,
    SideMuneComponent,
    TopProfileComponent,
    AdminManagementComponent,
    AdminMessagesComponent,
    AdminSecretariatComponent
  ]
})
export class AdminModule { }
