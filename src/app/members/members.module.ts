import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembersComponent } from './members.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    MembersComponent
  ],
  declarations: [
    MembersComponent
  ]
})
export class MembersModule { }
