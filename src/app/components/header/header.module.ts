import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

import { HeaderComponent } from './header.component';
import { MingcuteMenuLineModule } from '../../../assets/icons/mingcute-menu-line/mingcute-menu-line.module';

@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  imports: [CommonModule, NgOptimizedImage, RouterLink, MingcuteMenuLineModule],
})
export class HeaderModule {}
