import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FooterComponent } from './footer.component';
import { MingcuteFacebookFillComponent } from '../../../assets/icons/mingcute-facebook-fill.component';
import { MingcuteTelegramFillComponent } from '../../../assets/icons/mingcute-telegram-fill.component';
import { MingcuteInstagramFillComponent } from '../../../assets/icons/mingcute-instagram-fill.component';
import { MingcuteLinkedinFillComponent } from '../../../assets/icons/mingcute-linkedin-fill.component';
import { MingcuteSocialXFillComponent } from '../../../assets/icons/mingcute-social-xfill.component';
import { MingcuteYoutubeFillComponent } from '../../../assets/icons/mingcute-youtube-fill.component';

@NgModule({
  declarations: [FooterComponent],
  exports: [FooterComponent],
  imports: [
    CommonModule,
    FormsModule,
    MingcuteFacebookFillComponent,
    MingcuteTelegramFillComponent,
    MingcuteInstagramFillComponent,
    MingcuteLinkedinFillComponent,
    MingcuteSocialXFillComponent,
    MingcuteYoutubeFillComponent,
  ],
})
export class FooterModule {}
