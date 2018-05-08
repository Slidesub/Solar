import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { TagRoutesModule } from './tag.routes';
import { TagComponent } from './tag.component';
import { TagService } from './tag.service';
import { EditComponent } from './edit/edit.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    TagRoutesModule
  ],
  declarations: [
    TagComponent,
    EditComponent
  ],
  providers: [
    TagService
  ],
  entryComponents: [ EditComponent ]
})
export class TagModule { }
