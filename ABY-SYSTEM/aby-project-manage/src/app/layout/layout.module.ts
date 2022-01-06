import { NgModule } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { ContentComponent } from './content/content.component';
import { NgNestModule } from '../ng-nest.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [NgNestModule, RouterModule],
  declarations: [MenuComponent, ContentComponent],
  exports: [MenuComponent, ContentComponent],
})
export class LayoutModule {}
