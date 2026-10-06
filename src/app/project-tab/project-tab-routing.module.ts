import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectTabPage } from './project-tab.page';

const routes: Routes = [
  {
    path: '',
    component: ProjectTabPage,
    children: [
      {
        path: 'job-listing',
        loadChildren: () =>
          import('./job-listing/job-listing.module').then(
            (m) => m.JobListingPageModule,
          ),
      },
      {
        path: 'about',
        loadChildren: () =>
          import('./about/about.module').then(
            (m) => m.AboutPageModule,
          ),
      },
      {
        path: 'message',
        loadChildren: () =>
          import('./message/message.module').then(
            (m) => m.MessagePageModule,
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectTabPageRoutingModule {}
