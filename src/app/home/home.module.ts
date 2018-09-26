import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxHmCarouselModule } from 'ngx-hm-carousel';
import { Angular4PaystackModule } from 'angular4-paystack';
import { InternationalPhoneNumberModule } from 'ngx-international-phone-number';
import { AgmCoreModule } from '@agm/core';

import { FormatPipe } from './pipes/format/format.pipe';
import { TruncatePipe } from './pipes/truncate/truncate.pipe';

import { HomeComponent } from './home.component';
import { HeadBarComponent } from './components/head-bar/head-bar.component';
import { FooterBarComponent } from './components/footer-bar/footer-bar.component';
import { SliderComponent } from './components/slider/slider.component';
import { NewsComponent } from './components/news/news.component';
import { MissionComponent } from './components/mission/mission.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { LoginSectionComponent } from '../../components/login-section/login-section.component';
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

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    Angular4PaystackModule,
    BrowserModule,
    NgxHmCarouselModule,
    InternationalPhoneNumberModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAExzfabnjIXukdy3X8Q1hYMb1DFJTXxzY'
    }),
  ],
  declarations: [
    FooterBarComponent,
    HeadBarComponent,
    HomeComponent,
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
    PaymentComponent,
    ModalComponent
  ],
  providers: [
    ModalService
  ],

  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
