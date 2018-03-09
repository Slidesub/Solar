import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article.component';
import { ArticleRouteModule } from './article.route';

@NgModule({
  imports: [
    CommonModule,
    ArticleRouteModule
  ],
  exports: [ ],
  declarations: [ ArticleComponent ]
})

export class ArticleModule { }
