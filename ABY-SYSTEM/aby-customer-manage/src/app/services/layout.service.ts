import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { XMenuNode } from '@ng-nest/ui/menu';
import { filter } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class LayoutService {
  menus: XMenuNode[] = [
    {
      id: 'overview',
      label: 'Overview',
      icon: 'fto-box',
    },
    {
      id: 'navigation',
      label: 'Navigation',
      icon: 'fto-grid',
    },
    {
      id: 'menu-one',
      pid: 'navigation',
      label: 'Menu one',
    },
    {
      id: 'menu-two',
      pid: 'navigation',
      label: 'Menu two',
    },
  ];
  activatedId = '';

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((x) => x instanceof NavigationEnd))
      .subscribe((x) => {
        const rt = x as NavigationEnd;
        this.setActivated(rt.urlAfterRedirects);
      });
  }

  setActivated(url: string) {
    const menu = this.menus.find(
      (x) => !x.leaf && url.indexOf(`/${x.id}`) >= 0
    );
    if (menu) {
      this.activatedId = menu.id;
    }
  }
}
