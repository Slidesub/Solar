import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';

const UserRoutes: Routes = [
  {
    path: '',
    component: UserComponent
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(UserRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class UserRouteModule { }
