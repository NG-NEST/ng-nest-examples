import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuOneComponent } from './menu-one.component';

const routes: Routes = [
  {
    path: '',
    component: MenuOneComponent,
  },
];

@NgModule({
  declarations: [MenuOneComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class MenuOneModule {}
