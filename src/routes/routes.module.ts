import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from '../app/home/home.module';


import { IndexComponent } from '../app/home/routes/index/index.component';
import { AboutComponent } from '../app/home/routes/about/about.component';
import { ContactComponent } from '../app/home/routes/contact/contact.component';
import { RegisterComponent } from '../app/home/routes/register/register.component';
import { HomeComponent } from '../app/home/home.component';
import { MembersComponent } from '../app/members/members.component';
import { AdminComponent } from '../app/admin/admin.component';
import { StructureComponent } from '../app/home/routes/structure/structure.component';
import { CandidatesComponent } from '../app/home/routes/candidates/candidates.component';
import { AdminModule } from '../app/admin/admin.module';
import { MembersModule } from '../app/members/members.module';
import { IndexComponent as AdminIndex } from '../app/admin/routes/index/index.component';
import { ElectionTrackingComponent } from '../app/admin/routes/election-tracking/election-tracking.component';
import { MemberIndexComponent } from '../app/members/routes/member-index/member-index.component';
import { AdminManagementComponent } from '../app/admin/routes/admin-management/admin-management.component';
import { AdminMessagesComponent } from '../app/admin/routes/admin-messages/admin-messages.component';
import { UserpageComponent } from '../app/userpage/userpage.component';
import { MemberMessageComponent } from '../app/members/routes/member-message/member-message.component';
import { MemberSecretariatComponent } from '../app/members/routes/member-secretariat/member-secretariat.component';
import { MemberCandidatesComponent } from '../app/members/routes/member-candidates/member-candidates.component';
import { MemberSettingsComponent } from '../app/members/routes/member-settings/member-settings.component';
import { DoneComponent } from '../app/home/routes/done/done.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: IndexComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'contact',
        component: ContactComponent,
        data: {
          title: 'Contact Us'
        }
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'done',
        component: DoneComponent
      },
      {
        path: 'structure',
        component: StructureComponent
      },
      {
        path: 'candidates',
        component: CandidatesComponent
      }
    ]
  },

  {
    path: 'member',
    pathMatch: 'full',
    component: MembersComponent,
    children: [
      {
        path: '',
        component: MemberIndexComponent
      },
      {
        path: 'message',
        pathMatch: 'full',
        component: MemberMessageComponent
      },
      {
        path: 'secretariat',
        pathMatch: 'full',
        component: MemberSecretariatComponent
      },
      {
        path: 'candidates',
        component: MemberCandidatesComponent
      },
      {
        path: 'settings',
        pathMatch: 'full',
        component: MemberSettingsComponent
      }
    ]
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        component: AdminIndex
      },
      {
        path: 'elections',
        component: ElectionTrackingComponent
      },
      {
        path: 'members',
        component: AdminManagementComponent
      },
      {
        path: 'messages',
        component: AdminMessagesComponent
      }
    ]
  },
  {
    path: ':user',
    component: UserpageComponent
  },
  {
    path: '**',
    redirectTo: '/'
  }
];


@NgModule({
  imports: [
    CommonModule,
    HomeModule,
    AdminModule,
    MembersModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    )
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutesModule { }
