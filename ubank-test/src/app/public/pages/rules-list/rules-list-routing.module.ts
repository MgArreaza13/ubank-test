import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RulesListPage } from './rules-list.page';

const routes: Routes = [
  {
    path: '',
    component: RulesListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RulesListPageRoutingModule {}
