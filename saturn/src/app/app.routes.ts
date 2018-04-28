import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { ExternalExpr } from '@angular/compiler';
import { LoginComponent } from './portal/auth/login/login.component';
import { RegistComponent } from './portal/auth/regist/regist.component';
import { AuthGuard } from './portal/auth/auth.service';

const AppRoutes = [
  // { path: '', redirectTo: 'portal', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'regist', component: RegistComponent },
  { path: '', loadChildren: './portal/portal.module#PortalModule', canActivate: [ AuthGuard ] }
];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [
    // RouterModule.forRoot(AppRoutes, config)
    RouterModule.forRoot(AppRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutesModule { }
