import { NgModule } from '@angular/core';
import { NgNestModule } from '../ng-nest.module';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [NgNestModule],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
})
export class LayoutModule {}
