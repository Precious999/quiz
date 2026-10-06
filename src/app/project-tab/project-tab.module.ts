import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular/lazy';

import { ProjectTabPageRoutingModule } from './project-tab-routing.module';

import { ProjectTabPage } from './project-tab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProjectTabPageRoutingModule
  ],
  declarations: [ProjectTabPage]
})
export class ProjectTabPageModule {}
