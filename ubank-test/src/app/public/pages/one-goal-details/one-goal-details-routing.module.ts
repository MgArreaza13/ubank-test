import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OneGoalDetailsPage } from './one-goal-details.page';

const routes: Routes = [
  {
    path: '',
    component: OneGoalDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OneGoalDetailsPageRoutingModule {}
