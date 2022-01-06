import { Component, HostBinding } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { XMenuNode } from '@ng-nest/ui/menu';
import { LayoutService } from 'src/app/services/layout.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  @HostBinding('class.development') get development() {
    return !environment.production;
  }
  constructor(public layout: LayoutService, private router: Router, private location: Location) {}

  ngOnInit() {
    this.layout.setActivated(this.location.path());
  }

  menuClick(menu: XMenuNode) {
    if (!menu.leaf) {
      this.router.navigate([`views/aby-plugin-manage/${menu.id}`]);
    }
  }
}
