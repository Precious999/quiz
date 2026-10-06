import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular/lazy';

import { JobListingPageRoutingModule } from './job-listing-routing.module';

import { JobListingPage } from './job-listing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JobListingPageRoutingModule
  ],
  declarations: [JobListingPage]
})
export class JobListingPageModule {}
