import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RulerCreatePage } from './ruler-create.page';

const routes: Routes = [
  {
    path: '',
    component: RulerCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RulerCreatePageRoutingModule {}
