import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { menuItem } from '../../types/menu-item.type';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Input() public menu?: menuItem[] = [];
  private readonly currentUrl: string = '';
  protected showSideBar: boolean = false;

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
