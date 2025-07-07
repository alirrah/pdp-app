import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

import { HeaderComponent } from './header.component';
import { MingcuteMenuLineComponent } from '../../../assets/icons/mingcute-menu-line.component';

@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  imports: [
    CommonModule,
    NgOptimizedImage,
    RouterLink,
    MingcuteMenuLineComponent,
  ],
})
export class HeaderModule {}
