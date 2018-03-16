import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const HomeRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: 'article', pathMatch: 'full' },
      { path: 'guidance', loadChildren: './guidance/guidance.module#GuidanceModule' },
      { path: 'article', loadChildren: './article/article.module#ArticleModule' },
      { path: '**', redirectTo: 'guidance' }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(HomeRoutes) ],
  exports: [ RouterModule]
})

export class HomeRouteModule { }
