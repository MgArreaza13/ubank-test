import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GoalCreatePageRoutingModule } from './goal-create-routing.module';

import { GoalCreatePage } from './goal-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    GoalCreatePageRoutingModule
  ],
  declarations: [GoalCreatePage]
})
export class GoalCreatePageModule {}
