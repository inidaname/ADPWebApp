import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { DoneComponent } from './done/done.component';
import { StructureComponent } from './structure/structure.component';
import { CandidatesComponent } from './candidates/candidates.component';

const routes: Routes = [
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
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})

export class HomeRoutesModule {}
