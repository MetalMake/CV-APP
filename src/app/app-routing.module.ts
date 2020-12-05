import {​​​​​ NgModule }​​​​​ from '@angular/core';
import {​​​​​PreloadAllModules, RouterModule, Routes }​​​​​ from '@angular/router';
import {​​​​​ AuthGuard }​​​​​ from './services/Auth-Guard.service';


const routes: Routes = [

  {​​​​​ path: '',
  redirectTo: 'login', pathMatch: 'full' }​​​​​,

  {​​​​​ path: 'login',
   loadChildren:  './login/login.module#LoginPageModule' }​​​​​,
   {​​​​​
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule),
    canActivate: [AuthGuard]
  }​​​​​,
   {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'valikko',
    loadChildren: () => import('./valikko/valikko.module').then(m => m.ValikkoPageModule),
  },
  {
    path: 'personal-profile',
    loadChildren: () => import('./personal-profile/personal-profile.module').then( m => m.PersonalProfilePageModule)
  },
  {
    path: 'technical-skills',
    loadChildren: () => import('./technical-skills/technical-skills.module').then( m => m.TechnicalSkillsPageModule)
  },
  {
    path: 'soft-skills',
    loadChildren: () => import('./soft-skills/soft-skills.module').then( m => m.SoftSkillsPageModule)
  },
  {
    path: 'personal-project',
    loadChildren: () => import('./personal-project/personal-project.module').then( m => m.PersonalProjectPageModule)
  },
  {
    path: 'team-project',
    loadChildren: () => import('./team-project/team-project.module').then( m => m.TeamProjectPageModule)
  },
  {
    path: 'extra-curriculum',
    loadChildren: () => import('./extra-curriculum/extra-curriculum.module').then( m => m.ExtraCurriculumPageModule)
  },
  {
    path: 'contact-information',
    loadChildren: () => import('./contact-information/contact-information.module').then( m => m.ContactInformationPageModule)
  },
​​
];

@NgModule({​​​​​

  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
}​​​​​)
export class AppRoutingModule {​​​​​}​​​​​

