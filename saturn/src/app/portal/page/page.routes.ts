import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './page.component';

const TagRoutes: Routes = [
  {
    path: '',
    component: PageComponent,
    canActivate: []
  }
];

@NgModule({
  imports: [ RouterModule.forChild(TagRoutes) ],
  exports: [ RouterModule ]
})

export class PageRoutesModule { }
