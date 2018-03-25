import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { UserRouteModule } from './user.route';
import { FormsModule } from '@angular/forms';
import { UserService } from './user.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgZorroAntdModule,
    UserRouteModule
  ],
  declarations: [ UserComponent ],
  exports: [],
  providers: [ UserService ]
})

export class UserModule { }
