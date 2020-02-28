import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GoalCreatePage } from './goal-create.page';

const routes: Routes = [
  {
    path: '',
    component: GoalCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GoalCreatePageRoutingModule {}
