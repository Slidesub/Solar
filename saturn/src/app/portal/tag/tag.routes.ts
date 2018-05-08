import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TagComponent } from './tag.component';
const TagRoutes: Routes = [
  {
    path: '',
    component: TagComponent,
    canActivate: []
  }
];

@NgModule({
  imports: [ RouterModule.forChild(TagRoutes) ],
  exports: [ RouterModule ]
})

export class TagRoutesModule { }
