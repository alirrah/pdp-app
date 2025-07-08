import { Component } from '@angular/core';

import { MingcuteFacebookFillComponent } from '../../../assets/icons/mingcute-facebook-fill.component';
import { MingcuteTelegramFillComponent } from '../../../assets/icons/mingcute-telegram-fill.component';
import { MingcuteInstagramFillComponent } from '../../../assets/icons/mingcute-instagram-fill.component';
import { MingcuteLinkedinFillComponent } from '../../../assets/icons/mingcute-linkedin-fill.component';
import { MingcuteSocialXFillComponent } from '../../../assets/icons/mingcute-social-xfill.component';
import { MingcuteYoutubeFillComponent } from '../../../assets/icons/mingcute-youtube-fill.component';

import { Link } from '../../types/link.type';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  protected communicationWays: Link[] = [
    { icon: MingcuteFacebookFillComponent, title: 'فیسبوک', link: '#' },
    { icon: MingcuteTelegramFillComponent, title: 'تلگرام', link: '#' },
    { icon: MingcuteInstagramFillComponent, title: 'اینستاگرام', link: '#' },
    { icon: MingcuteLinkedinFillComponent, title: 'لینکدین', link: '#' },
    {
      icon: MingcuteSocialXFillComponent,
      title: 'ایکس (توییتر سابق)',
      link: '#',
    },
    { icon: MingcuteYoutubeFillComponent, title: 'یوتیوب', link: '#' },
  ];
  protected quickAccesses: Pick<Link, 'title' | 'link'>[] = [
    { title: 'Vision', link: '#' },
    { title: 'Mission', link: '#' },
    { title: 'Action', link: '#' },
    { title: 'Dashboard', link: '#' },
    { title: 'Option', link: '#' },
    { title: 'Chat Bot', link: '#' },
    { title: 'Store', link: '#' },
  ];

  protected formSubmitHandler() {
    //TODO
  }
}
