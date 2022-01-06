import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuTwoComponent } from './menu-two.component';

const routes: Routes = [
  {
    path: '',
    component: MenuTwoComponent,
  },
];

@NgModule({
  declarations: [MenuTwoComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class MenuTwoModule {}
