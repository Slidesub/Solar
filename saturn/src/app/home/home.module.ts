import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRouteModule } from './home.route';
import { HomeComponent } from './home.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { HeaderComponent } from '../component/header/header.component';
import { ArticleModule } from './article/article.module';
import { HttpService } from '../service/http.service';


@NgModule({
  imports: [
    CommonModule,
    HomeRouteModule,
    NgZorroAntdModule,
    ArticleModule
  ],
  exports: [
    HomeComponent
  ],
  declarations: [ HomeComponent, HeaderComponent ],
  providers: [ HttpService ]
})

export class HomeModule { }
