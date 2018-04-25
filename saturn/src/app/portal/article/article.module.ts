import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleRoutesModule } from './article.routes';
import { ArticleComponent } from './article.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  imports: [
    CommonModule,
    ArticleRoutesModule
  ],
  declarations: [
    ArticleComponent,
    ListComponent,
    EditComponent
  ]
})
export class ArticleModule { }
