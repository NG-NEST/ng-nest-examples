import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'views/aby-project-manage/overview',
    loadChildren: () => import('./pages/overview/overview.module').then((x) => x.OverviewModule)
  },
  {
    path: 'views/aby-project-manage/menu-one',
    loadChildren: () => import('./pages/menu-one/menu-one.module').then((x) => x.MenuOneModule)
  },
  {
    path: 'views/aby-project-manage/menu-two',
    loadChildren: () => import('./pages/menu-two/menu-two.module').then((x) => x.MenuTwoModule)
  },
  {
    path: 'views/aby-project-manage',
    redirectTo: 'views/aby-project-manage/overview',
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: 'views/aby-project-manage/overview',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
