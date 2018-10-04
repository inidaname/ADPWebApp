import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MembersComponent } from './members.component';
import { MemberSideMenuComponent } from './components/member-side-menu/member-side-menu.component';
import { MemberIndexComponent } from './routes/member-index/member-index.component';
import { MemberMessageComponent } from './routes/member-message/member-message.component';
import { MemberSecretariatComponent } from './routes/member-secretariat/member-secretariat.component';
import { MemberCandidatesComponent } from './routes/member-candidates/member-candidates.component';
import { MemberSettingsComponent } from './routes/member-settings/member-settings.component';
import { MemberTopProfileComponent } from './components/member-top-profile/member-top-profile.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAExzfabnjIXukdy3X8Q1hYMb1DFJTXxzY'
    }),
    FontAwesomeModule
  ],
  exports: [
    MembersComponent
  ],
  declarations: [
    MembersComponent,
    MemberIndexComponent,
    MemberSideMenuComponent,
    MemberMessageComponent,
    MemberSecretariatComponent,
    MemberCandidatesComponent,
    MemberSettingsComponent,
    MemberTopProfileComponent
  ]
})
export class MembersModule { }
