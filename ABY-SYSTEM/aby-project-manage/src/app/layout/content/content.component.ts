import { Component, HostBinding, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  @HostBinding('class.development') get development() {
    return !environment.production;
  }

  constructor() {}

  ngOnInit(): void {}
}
