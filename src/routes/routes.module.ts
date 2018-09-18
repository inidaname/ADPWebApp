import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Angular4PaystackModule } from 'angular4-paystack';
import { NgxHmCarouselModule } from 'ngx-hm-carousel';
import { AgmCoreModule } from '@agm/core';


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
import { QuicklinksComponent } from '../components/quicklinks/quicklinks.component';
import { CandidatesComponent } from './candidates/candidates.component';
import { HomeComponent } from '../app/home/home.component';
import { MemberComponent } from '../app/member/member.component';
import { AdminComponent } from '../app/admin/admin.component';
import { DragOneComponent } from './drag-one/drag-one.component';

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
    component: MemberComponent,
    children: [
      {
        path: '',
        component: IndexComponent
      }
    ]
  },

  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        component: IndexComponent
      }
    ]
  }
];


@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    Angular4PaystackModule,
    NgxHmCarouselModule,
    AgmCoreModule.forRoot({
      apiKey: 'Your_KEY'
    }),
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: false}
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
    LoginSectionComponent,
    QuicklinksComponent,
    CandidatesComponent,
    DragOneComponent
  ]
})
export class RoutesModule { }
