import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GoalsDetailsPageRoutingModule } from './goals-details-routing.module';

import { GoalsDetailsPage } from './goals-details.page';
import { OneGoalDetailsPageModule } from '../one-goal-details/one-goal-details.module';
import { GoalsDetailsCardComponent } from './components/goals-details-card/goals-details-card.component';
import { GoalsDetailsResultComponent } from './components/goals-details-result/goals-details-result.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GoalsDetailsPageRoutingModule,
    OneGoalDetailsPageModule,
  ],
  declarations: [GoalsDetailsPage, GoalsDetailsCardComponent, GoalsDetailsResultComponent]
})
export class GoalsDetailsPageModule {}
