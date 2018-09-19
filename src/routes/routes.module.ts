import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Angular4PaystackModule } from 'angular4-paystack';
import { AgmCoreModule } from '@agm/core';
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
    component: MembersComponent,
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
    HomeModule,
    AgmCoreModule.forRoot({
      apiKey: 'Your_KEY'
    }),
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
