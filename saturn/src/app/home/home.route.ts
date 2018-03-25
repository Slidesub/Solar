import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const HomeRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [],
    children: [
      { path: '', redirectTo: 'user', pathMatch: 'full' },
      { path: 'guidance', loadChildren: './guidance/guidance.module#GuidanceModule' },
      { path: 'user', loadChildren: './user/user.module#UserModule' },
      // { path: 'article', loadChildren: './article/article.module#ArticleModule' },
      { path: '**', redirectTo: 'guidance' }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(HomeRoutes) ],
  exports: [ RouterModule ]
})

export class HomeRouteModule { }
