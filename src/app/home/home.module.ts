import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxHmCarouselModule } from 'ngx-hm-carousel';
import { Angular4PaystackModule } from 'angular4-paystack';
import { InternationalPhoneNumberModule } from 'ngx-international-phone-number';
import { AgmCoreModule } from '@agm/core';
import { CloudinaryModule } from '@cloudinary/angular-5.x';
import * as  Cloudinary from 'cloudinary-core';

import { FormatPipe } from './pipes/format/format.pipe';
import { TruncatePipe } from './pipes/truncate/truncate.pipe';

import { HomeComponent } from './home.component';
import { HeadBarComponent } from './components/head-bar/head-bar.component';
import { FooterBarComponent } from './components/footer-bar/footer-bar.component';
import { SliderComponent } from './components/slider/slider.component';
import { NewsComponent } from './components/news/news.component';
import { MissionComponent } from './components/mission/mission.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { LoginSectionComponent } from './components/login-section/login-section.component';
import { QuicklinksComponent } from './components/quicklinks/quicklinks.component';
import { RouterModule } from '@angular/router';
import { IndexComponent } from './routes/index/index.component';
import { DragOneComponent } from './components/drag-one/drag-one.component';
import { RegisterComponent } from './routes/register/register.component';
import { AboutComponent } from './routes/about/about.component';
import { ContactComponent } from './routes/contact/contact.component';
import { StructureComponent } from './routes/structure/structure.component';
import { CandidatesComponent } from './routes/candidates/candidates.component';
import { PaymentComponent } from './components/payment/payment.component';
import { ModalService } from './services/modals/modals.service';
import { ModalComponent } from './components/payment/modal.component';
import { DoneComponent } from './routes/done/done.component';
import { config } from '../../config';
import { FileUploadModule } from 'ng2-file-upload';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    Angular4PaystackModule,
    NgxHmCarouselModule,
    InternationalPhoneNumberModule,
    AgmCoreModule.forRoot({
      apiKey: config.apiKey.google
    }),
    FileUploadModule,
    CloudinaryModule.forRoot(Cloudinary, {
      cloud_name: config.apiKey.cloudinary,
      api_key: config.apiKey.clKey,
      api_secret: config.apiKey.clSe,
      upload_preset: 'adpnigeria'
    }),
  ],
  declarations: [
    SliderComponent,
    NewsComponent,
    MissionComponent,
    AboutSectionComponent,
    LoginSectionComponent,
    QuicklinksComponent,
    IndexComponent,
    DragOneComponent,
    RegisterComponent,
    AboutComponent,
    ContactComponent,
    StructureComponent,
    CandidatesComponent,
    TruncatePipe,
    FormatPipe,
    FooterBarComponent,
    HeadBarComponent,
    HomeComponent,
    PaymentComponent,
    ModalComponent,
    DoneComponent
  ],
  providers: [
    ModalService
  ],

  exports: []
})
export class HomeModule { }
