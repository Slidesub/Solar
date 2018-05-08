import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MediaComponent } from './media.component';

const MediaRoutes: Routes = [
  {
    path: '',
    component: MediaComponent,
    canActivate: [],
    children: [
      { path: '', redirectTo: 'image', pathMatch: 'full' },
      // { path: 'image', component: ImageComponent },
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(MediaRoutes) ],
  exports: [ RouterModule ]
})

export class MediaRoutesModule { }
