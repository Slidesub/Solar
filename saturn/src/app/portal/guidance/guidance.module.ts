import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuidanceComponent } from './guidance.component';
import { GuidanceRouteModule } from './guidance.route';

@NgModule({
  imports: [
    CommonModule,
    GuidanceRouteModule
  ],
  exports: [ ],
  declarations: [ GuidanceComponent ]
})
export class GuidanceModule { }
