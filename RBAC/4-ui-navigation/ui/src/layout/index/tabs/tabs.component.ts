import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  encapsulation: ViewEncapsulation.None
})
export class TabsComponent implements OnInit {
  data = [];
  activatedIndex: number = -1;
  showClose = 0;
  constructor() {}

  ngOnInit(): void {}

  tab(index: number) {}

  close() {
    
  }
}
