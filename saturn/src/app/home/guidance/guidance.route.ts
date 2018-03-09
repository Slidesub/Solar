import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GuidanceComponent } from './guidance.component';

const GuidanceRoute: Routes = [
  {
    path: '',
    component: GuidanceComponent
  }
];

@NgModule({
  imports: [ RouterModule.forChild(GuidanceRoute) ],
  exports: [ RouterModule]
})

export class GuidanceRouteModule { }
