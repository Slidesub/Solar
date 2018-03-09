import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './article.component';

const ArticleRoutes: Routes = [
  {
    path: '',
    component: ArticleComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(ArticleRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class ArticleRouteModule { }
