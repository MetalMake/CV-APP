import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardPageModule)
      },
      {
        path: 'personal-profile',
        loadChildren: () => import('../personal-profile/personal-profile.module').then(m => m.PersonalProfilePageModule)
      },
      {
        path: 'extra-curriculum',
        loadChildren: () => import('../extra-curriculum/extra-curriculum.module').then(m => m.ExtraCurriculumPageModule)
      },
      {
        path: 'personal-project',
        loadChildren: () => import('../personal-project/personal-project.module').then(m => m.PersonalProjectPageModule)
      },
      {
        path: 'soft-skills',
        loadChildren: () => import('../soft-skills/soft-skills.module').then(m => m.SoftSkillsPageModule)
      },
      {
        path: 'contact-information',
        loadChildren: () => import('../contact-information/contact-information.module').then(m => m.ContactInformationPageModule)
      },
      {
        path: 'team-project',
        loadChildren: () => import('../team-project/team-project.module').then(m => m.TeamProjectPageModule)
      },
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/dashboard',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
