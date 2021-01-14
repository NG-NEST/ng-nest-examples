import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IndexService } from '../index.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  encapsulation: ViewEncapsulation.None
})
export class TabsComponent implements OnInit {
  constructor(public index: IndexService) {}

  ngOnInit(): void {}
}
