import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './article.component';
import { ListArticleComponent } from './list-article/list-article.component';
import { AddArticleComponent } from './add-article/add-article.component';

const ArticleRoutes: Routes = [
  { path: '',  component: ArticleComponent },
  { path: 'list',  component: ListArticleComponent },
  { path: 'add', component: AddArticleComponent }
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
