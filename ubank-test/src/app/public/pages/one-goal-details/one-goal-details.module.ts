import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OneGoalDetailsPageRoutingModule } from './one-goal-details-routing.module';

import { OneGoalDetailsPage } from './one-goal-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OneGoalDetailsPageRoutingModule
  ],
  declarations: [OneGoalDetailsPage]
})
export class OneGoalDetailsPageModule {}
