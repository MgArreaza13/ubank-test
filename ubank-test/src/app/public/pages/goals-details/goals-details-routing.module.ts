import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GoalsDetailsPage } from './goals-details.page';

const routes: Routes = [
  {
    path: '',
    component: GoalsDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GoalsDetailsPageRoutingModule {}
