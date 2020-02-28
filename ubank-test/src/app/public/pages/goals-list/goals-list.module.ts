import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GoalsListPageRoutingModule } from './goals-list-routing.module';

import { GoalsListPage } from './goals-list.page';
import { GoalsListCardComponent } from './components/goals-list-card/goals-list-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    GoalsListPageRoutingModule
  ],
  declarations: [GoalsListPage, GoalsListCardComponent]
})
export class GoalsListPageModule {}
