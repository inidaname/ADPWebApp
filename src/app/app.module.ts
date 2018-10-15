import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RoutesModule } from '../routes/routes.module';

import { AppComponent } from './app.component';
import { UserpageComponent } from './userpage/userpage.component';
import { StatesComponent } from './states/states.component';

@NgModule({
  declarations: [
    AppComponent,
    UserpageComponent,
    StatesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
