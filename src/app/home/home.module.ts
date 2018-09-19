import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxHmCarouselModule } from 'ngx-hm-carousel';
import { Angular4PaystackModule } from 'angular4-paystack';

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
import { DragOneComponent } from './routes/drag-one/drag-one.component';
import { RegisterComponent } from './routes/register/register.component';
import { AboutComponent } from './routes/about/about.component';
import { ContactComponent } from './routes/contact/contact.component';
import { StructureComponent } from './routes/structure/structure.component';
import { CandidatesComponent } from './routes/candidates/candidates.component';

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
    NgxHmCarouselModule
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
    CandidatesComponent
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
