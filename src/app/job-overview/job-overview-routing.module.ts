import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JobOverviewPage } from './job-overview.page';

const routes: Routes = [
  {
    path: '',
    component: JobOverviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobOverviewPageRoutingModule {}
