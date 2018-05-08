import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaRoutesModule } from './media.routes';
import { MediaComponent } from './media.component';

@NgModule({
  imports: [
    CommonModule,
    MediaRoutesModule
  ],
  declarations: [
    MediaComponent
  ]
})
export class MediaModule { }
