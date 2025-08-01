import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Link } from '../../types/link.type';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private readonly currentUrl: string = '';
  protected showSideBar: boolean = false;
  protected menuItems: Pick<Link, 'title' | 'link'>[] = [
    { title: 'اشتراک ویژه', link: '#' },
    { title: 'افزونه‌ها', link: '#' },
    { title: 'آموزش', link: '#' },
    { title: 'درباره‌ما', link: '#' },
    { title: 'درخواست مشاوره', link: '#' },
  ];

  public constructor(private router: Router) {
    this.currentUrl = this.router.url;
  }

  protected isActiveLink(link: string): boolean {
    return this.currentUrl === link;
  }

  protected toggleMenu(): void {
    this.showSideBar = !this.showSideBar;
  }
}
