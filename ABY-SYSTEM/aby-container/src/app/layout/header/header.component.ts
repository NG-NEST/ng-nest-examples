import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { XSliderNode } from '@ng-nest/ui/slider';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  data: XSliderNode[] = [];
  activatedIndex = 0;

  constructor(private httpClient: HttpClient, private location: Location) {}

  ngOnInit() {
    this.getPlugins();
  }

  getPlugins() {
    this.httpClient.get<XSliderNode[]>('/v1/plugins').subscribe((x) => {
      this.data = x;
      this.setLocation();
    });
  }

  setLocation() {
    const path = this.location.path();
    for (let item of this.data) {
      if (path.lastIndexOf(`/${item.id}`) >= 0) {
        this.activatedIndex = this.data.indexOf(item);
        break;
      }
    }
  }

  nodeChange(node: XSliderNode) {
    window.location.href = `/views/${node.id}`;
  }
}
