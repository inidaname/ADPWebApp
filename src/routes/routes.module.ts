import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeModule } from 'src/app/home/home.module';
import { StorageServiceModule} from 'angular-webstorage-service';



import { HomeComponent } from '../app/home/home.component';
import { AdminComponent } from '../app/admin/admin.component';
import { AdminModule } from '../app/admin/admin.module';
import { IndexComponent as AdminIndex } from '../app/admin/routes/index/index.component';
import { ElectionTrackingComponent } from '../app/admin/routes/election-tracking/election-tracking.component';
import { AdminManagementComponent } from '../app/admin/routes/admin-management/admin-management.component';
import { AdminMessagesComponent } from '../app/admin/routes/admin-messages/admin-messages.component';
import { UserpageComponent } from '../app/userpage/userpage.component';
import { MembersComponent } from '../app/members/members.component';
import { MemberSideMenuComponent } from '../app/members/components/member-side-menu/member-side-menu.component';
import { IndexComponent } from '../app/home/routes/index/index.component';
import { AboutComponent } from '../app/home/routes/about/about.component';
import { ContactComponent } from '../app/home/routes/contact/contact.component';
import { RegisterComponent } from '../app/home/routes/register/register.component';
import { DoneComponent } from '../app/home/routes/done/done.component';
import { StructureComponent } from '../app/home/routes/structure/structure.component';
import { CandidatesComponent } from '../app/home/routes/candidates/candidates.component';
import { AuthGuard } from '../app/auth.guard';
import { AdminSecretariatComponent } from '../app/admin/routes/admin-secretariat/admin-secretariat.component';
import { MemberIndexComponent } from 'src/app/members/routes/member-index/member-index.component';
import { MemberMessageComponent } from 'src/app/members/routes/member-message/member-message.component';
import { MemberSecretariatComponent } from 'src/app/members/routes/member-secretariat/member-secretariat.component';
import { MemberCandidatesComponent } from 'src/app/members/routes/member-candidates/member-candidates.component';
import { MemberSettingsComponent } from 'src/app/members/routes/member-settings/member-settings.component';
import { AdminGuard } from '../app/admin.guard';


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
    component: MembersComponent,
    canActivate: [AuthGuard],
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
        path: 'platform',
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
    canActivate: [AuthGuard],
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
        path: 'secretariat',
        component: AdminSecretariatComponent
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
    AdminModule,
    HomeModule,
    FontAwesomeModule,
    StorageServiceModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    )
  ],
  exports: [
    RouterModule
  ],
  declarations: [],
  providers: [AuthGuard]
})
export class RoutesModule { }
