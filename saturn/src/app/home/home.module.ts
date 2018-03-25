import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRouteModule } from './home.route';
import { HomeComponent } from './home.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { HeaderComponent } from '../component/header/header.component';
import { HttpService } from '../service/http.service';
import { MenuComponent } from '../component/menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    HomeRouteModule
  ],
  exports: [
  ],
  declarations: [
    HomeComponent,
    HeaderComponent,
    MenuComponent
  ],
  providers: [ HttpService ]
})

export class HomeModule { }
