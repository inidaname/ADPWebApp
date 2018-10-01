import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MembersComponent } from './members.component';
import { MemberSideMenuComponent } from './components/member-side-menu/member-side-menu.component';
import { MemberIndexComponent } from './routes/member-index/member-index.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    MembersComponent
  ],
  declarations: [
    MembersComponent,
    MemberIndexComponent,
    MemberSideMenuComponent
  ]
})
export class MembersModule { }
