import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FooterBarComponent } from './footer-bar/footer-bar.component';
import { HeadBarComponent } from './head-bar/head-bar.component';
import { HomeComponent } from '../home.component';
import { SliderComponent } from './slider/slider.component';
import { NewsComponent } from './news/news.component';
import { MissionComponent } from './mission/mission.component';
import { AboutSectionComponent } from './about-section/about-section.component';
import { LoginSectionComponent } from './login-section/login-section.component';
import { QuicklinksComponent } from './quicklinks/quicklinks.component';
import { DragOneComponent } from './drag-one/drag-one.component';
import { PaymentComponent } from './payment/payment.component';
import { ModalComponent } from './payment/modal.component';
import { TruncatePipe } from '../pipes/truncate/truncate.pipe';
import { FormatPipe } from '../pipes/format/format.pipe';
import { Angular4PaystackModule } from 'angular4-paystack';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
    imports: [
        CommonModule,
        FontAwesomeModule,
        HttpClientModule,
        RouterModule,
        FormsModule,
        Angular4PaystackModule,
        ReactiveFormsModule
    ],
    declarations: [
        FooterBarComponent,
        HeadBarComponent,
        HomeComponent,
        PaymentComponent,
        ModalComponent
    ],
    providers: []
})

export class HomeComponentsModule { }
