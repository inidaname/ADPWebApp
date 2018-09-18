import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Angular4PaystackModule } from 'angular4-paystack';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { RoutesModule } from '../routes/routes.module';
import { ChartjsModule } from '@ctrl/ngx-chartjs';

import { AppComponent } from './app.component';
import { FooterBarComponent } from '../components/footer-bar/footer-bar.component';
import { HeadBarComponent } from '../components/head-bar/head-bar.component';
import { HomeComponent } from './home/home.component';
import { MemberComponent } from './member/member.component';
import { AdminComponent } from './admin/admin.component';
// import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterBarComponent,
    HeadBarComponent,
    HomeComponent,
    MemberComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RoutesModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    Angular4PaystackModule,
    ChartjsModule,
    ReactiveFormsModule,
    // NgxHmCarouselModule
    // ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
