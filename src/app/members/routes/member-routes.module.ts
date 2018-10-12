import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MembersComponent } from '../members.component';
import { MemberIndexComponent } from './member-index/member-index.component';
import { MemberMessageComponent } from './member-message/member-message.component';
import { MemberSecretariatComponent } from './member-secretariat/member-secretariat.component';
import { MemberCandidatesComponent } from './member-candidates/member-candidates.component';
import { MemberSettingsComponent } from './member-settings/member-settings.component';

const routes: Routes = [
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
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})

export class MembersRouteModule { }
