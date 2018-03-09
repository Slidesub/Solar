import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { ExternalExpr } from '@angular/compiler';


const AppRoutes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomeModule' }
];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [
    RouterModule.forRoot(AppRoutes, config)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRouteModule { }
