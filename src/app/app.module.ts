import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RoutesModule } from '../routes/routes.module';
import { FooterBarComponent } from '../components/footer-bar/footer-bar.component';
import { HeadBarComponent } from '../components/head-bar/head-bar.component';
import { SliderComponent } from '../components/slider/slider.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterBarComponent,
    HeadBarComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    RoutesModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
