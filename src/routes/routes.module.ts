import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { IndexComponent } from './index/index.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { StructureComponent } from './structure/structure.component';
import { SliderComponent } from '../components/slider/slider.component';
import { NewsComponent } from '../components/news/news.component';
import { MissionComponent } from '../components/mission/mission.component';
import { AboutSectionComponent } from '../components/about-section/about-section.component';
import { LoginSectionComponent } from '../components/login-section/login-section.component';

const appRoutes: Routes = [
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
    path: 'structure',
    component: StructureComponent
  }
];


@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
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
    StructureComponent,
    SliderComponent,
    NewsComponent,
    MissionComponent,
    AboutSectionComponent,
    LoginSectionComponent
  ]
})
export class RoutesModule { }
