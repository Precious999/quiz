import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JobListingPage } from './job-listing.page';

const routes: Routes = [
  {
    path: '',
    component: JobListingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobListingPageRoutingModule {}
