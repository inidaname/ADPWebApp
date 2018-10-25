import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RoutesModule } from '../routes/routes.module';

import { AppComponent } from './app.component';
import { UserpageComponent } from './userpage/userpage.component';
import { MembersModule } from './members/members.module';

@NgModule({
  declarations: [
    AppComponent,
    UserpageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RoutesModule,
    MembersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
