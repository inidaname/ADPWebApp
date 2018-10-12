import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MembersRouteModule } from './routes/member-routes.module';

import { MembersComponent } from './members.component';
import { MemberSideMenuComponent } from './components/member-side-menu/member-side-menu.component';
import { MemberIndexComponent } from './routes/member-index/member-index.component';
import { MemberMessageComponent } from './routes/member-message/member-message.component';
import { MemberSecretariatComponent } from './routes/member-secretariat/member-secretariat.component';
import { MemberCandidatesComponent } from './routes/member-candidates/member-candidates.component';
import { MemberSettingsComponent } from './routes/member-settings/member-settings.component';
import { config } from '../../config';

@NgModule({
  imports: [
    CommonModule,
    MembersRouteModule,
    AgmCoreModule.forRoot({
      apiKey: config.apiKey.google
    }),
    FontAwesomeModule
  ],
  exports: [],
  declarations: [
    MemberIndexComponent,
    MemberMessageComponent,
    MemberSecretariatComponent,
    MemberCandidatesComponent,
    MemberSettingsComponent
  ]
})
export class MembersModule { }
