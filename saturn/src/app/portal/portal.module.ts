import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalRoutesModule } from './portal.routes';
import { PortalComponent } from './portal.component';
import { HeaderComponent } from '../component/header/header.component';
import { MenuComponent } from '../component/menu/menu.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    PortalRoutesModule
  ],
  declarations: [
    HeaderComponent,
    MenuComponent,
    PortalComponent
  ]
})
export class PortalModule { }
