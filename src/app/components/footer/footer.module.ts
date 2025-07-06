import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './footer.component';

import { MingcuteFacebookFillModule } from '../../../assets/icons/mingcute-facebook-fill/mingcute-facebook-fill.module';
import { MingcuteInstagramFillModule } from '../../../assets/icons/mingcute-instagram-fill/mingcute-instagram-fill.module';
import { MingcuteLinkedinFillModule } from '../../../assets/icons/mingcute-linkedin-fill/mingcute-linkedin-fill.module';
import { MingcuteYoutubeFillModule } from '../../../assets/icons/mingcute-youtube-fill/mingcute-youtube-fill.module';
import { MingcuteTelegramFillModule } from '../../../assets/icons/mingcute-telegram-fill/mingcute-telegram-fill.module';
import { MingcuteSocialXFillModule } from '../../../assets/icons/mingcute-social-xfill/mingcute-social-xfill.module';

@NgModule({
  declarations: [FooterComponent],
  exports: [FooterComponent],
  imports: [
    CommonModule,
    MingcuteFacebookFillModule,
    MingcuteInstagramFillModule,
    MingcuteLinkedinFillModule,
    MingcuteYoutubeFillModule,
    MingcuteTelegramFillModule,
    MingcuteSocialXFillModule,
  ],
})
export class FooterModule {}
