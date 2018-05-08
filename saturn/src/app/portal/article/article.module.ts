import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArticleRoutesModule } from './article.routes';
import { ArticleComponent } from './article.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ArticleService } from './article.service';
import { UploaderComponent } from '../../component/uploader/uploader.component';
import { UploaderService } from '../../component/uploader/uploader.service';
import { TagService } from '../tag/tag.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    ArticleRoutesModule
  ],
  declarations: [
    ArticleComponent,
    ListComponent,
    EditComponent,
    UploaderComponent
  ],
  providers: [
    ArticleService,
    TagService,
    UploaderService
  ]
})
export class ArticleModule { }
