import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { PageComponent } from './page.component';
import { PageRoutesModule } from './page.routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    PageRoutesModule
  ],
  declarations: [
    PageComponent
  ],
  providers: [
  ]
})
export class PageModule { }
