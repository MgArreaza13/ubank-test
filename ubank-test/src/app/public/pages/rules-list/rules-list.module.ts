import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RulesListPageRoutingModule } from './rules-list-routing.module';

import { RulesListPage } from './rules-list.page';
import { RulesListCardComponent } from './components/rules-list-card/rules-list-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    RulesListPageRoutingModule
  ],
  declarations: [RulesListPage, RulesListCardComponent]
})
export class RulesListPageModule {}
