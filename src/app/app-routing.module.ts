import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'project-tab',
    loadChildren: () => import('./project-tab/project-tab.module').then( m => m.ProjectTabPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'read-message/:id',
    loadChildren: () => import('./read-message/read-message.module').then( m => m.ReadMessagePageModule)
  },
  {
    path: 'job-overview/:id',
    loadChildren: () => import('./job-overview/job-overview.module').then( m => m.JobOverviewPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
