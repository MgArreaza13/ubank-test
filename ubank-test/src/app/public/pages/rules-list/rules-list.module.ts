import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RulesListPageRoutingModule } from './rules-list-routing.module';

import { RulesListPage } from './rules-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RulesListPageRoutingModule
  ],
  declarations: [RulesListPage]
})
export class RulesListPageModule {}
