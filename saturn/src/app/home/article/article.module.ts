import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article.component';
import { ArticleRouteModule } from './article.route';
import { ListArticleComponent } from './list-article/list-article.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ArticleService } from './article.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule.forRoot(),
    ArticleRouteModule
  ],
  exports: [ ],
  providers: [ ArticleService ],
  declarations: [ ArticleComponent, ListArticleComponent, AddArticleComponent ]
})

export class ArticleModule { }
