import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular/lazy';

import { JobOverviewPageRoutingModule } from './job-overview-routing.module';

import { JobOverviewPage } from './job-overview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JobOverviewPageRoutingModule
  ],
  declarations: [JobOverviewPage]
})
export class JobOverviewPageModule {}
