import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { layoutRoutes } from 'src/environments/routes';

@NgModule({
  imports: [RouterModule.forRoot(layoutRoutes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
