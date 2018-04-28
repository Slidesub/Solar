import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleRoutesModule } from './article.routes';
import { ArticleComponent } from './article.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ArticleService } from './article.service';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    ArticleRoutesModule
  ],
  declarations: [
    ArticleComponent,
    ListComponent,
    EditComponent
  ],
  providers: [
    ArticleService
  ]
})
export class ArticleModule { }
