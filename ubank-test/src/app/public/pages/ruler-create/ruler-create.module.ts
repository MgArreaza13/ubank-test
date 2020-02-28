import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RulerCreatePageRoutingModule } from './ruler-create-routing.module';

import { RulerCreatePage } from './ruler-create.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    RulerCreatePageRoutingModule
  ],
  declarations: [RulerCreatePage]
})
export class RulerCreatePageModule {}
