import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeadBarComponent } from '../../components/head-bar/head-bar.component';
import { FooterBarComponent } from '../../components/footer-bar/footer-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoutesModule } from '../../routes/routes.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Angular4PaystackModule } from 'angular4-paystack';
import { ChartjsModule } from '@ctrl/ngx-chartjs';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RoutesModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    Angular4PaystackModule,
    ChartjsModule
  ],
  declarations: [
    HeadBarComponent,
    HomeComponent,
    FooterBarComponent
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
