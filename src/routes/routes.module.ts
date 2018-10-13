import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponentsModule } from '../app/home/components/home-components.module';
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
import { AuthGuard } from '../app/auth.guard';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    loadChildren: '../app/home/home.module#HomeModule'
  },
  {
    path: 'member',
    component: MembersComponent,
    canActivate: [AuthGuard],
    loadChildren: '../app/members/members.module#MembersModule'
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
    HomeComponentsModule,
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
  declarations: [
    MembersComponent,
    MemberSideMenuComponent,
  ],
  providers: [AuthGuard]
})
export class RoutesModule { }
