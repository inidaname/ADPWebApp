import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { StructureComponent } from './structure/structure.component';

const appRoutes: Routes = [
  {
    path: '',
    component: IndexComponent,
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
    path: 'structure',
    component: StructureComponent
  }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    )
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    IndexComponent,
    RegisterComponent,
    AboutComponent,
    ContactComponent,
    StructureComponent
  ]
})
export class RoutesModule { }
