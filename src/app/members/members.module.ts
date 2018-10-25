import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FileUploadModule } from 'ng2-file-upload';
import { CloudinaryModule } from '@cloudinary/angular-5.x';
import * as  Cloudinary from 'cloudinary-core';

import { MembersComponent } from './members.component';
import { MemberSideMenuComponent } from './components/member-side-menu/member-side-menu.component';
import { MemberIndexComponent } from './routes/member-index/member-index.component';
import { MemberMessageComponent } from './routes/member-message/member-message.component';
import { MemberSecretariatComponent } from './routes/member-secretariat/member-secretariat.component';
import { MemberCandidatesComponent } from './routes/member-candidates/member-candidates.component';
import { MemberSettingsComponent } from './routes/member-settings/member-settings.component';
import { config } from '../../config';
import { RoutesModule } from 'src/routes/routes.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RoutesModule,
    ReactiveFormsModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: config.apiKey.google
    }),
    FontAwesomeModule,
    FileUploadModule,
    CloudinaryModule.forRoot(Cloudinary, {
      cloud_name: config.apiKey.cloudinary,
      api_key: config.apiKey.clKey,
      api_secret: config.apiKey.clSe,
      upload_preset: 'adpnigeria'
    })
  ],
  exports: [],
  declarations: [
    MembersComponent,
    MemberSideMenuComponent,
    MemberIndexComponent,
    MemberMessageComponent,
    MemberSecretariatComponent,
    MemberCandidatesComponent,
    MemberSettingsComponent
  ]
})
export class MembersModule { }
