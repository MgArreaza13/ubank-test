import { SharedModule } from './../../../shared/shared.module';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { HomeProgressComponent } from './components/home-progress/home-progress.component';
import { HomeSlideComponent } from './components/home-slide/home-slide.component';
import { HomeSlideCardComponent } from './components/home-slide-card/home-slide-card.component';
import { HomeDetailsComponent } from './components/home-details/home-details.component';
import { HomeDetailsCardComponent } from './components/home-details-card/home-details-card.component';
import { HomeDetailsCardAddComponent } from './components/home-details-card-add/home-details-card-add.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }]),
    ChartsModule,
  ],
  declarations: [
    Tab1Page, 
    HomeProgressComponent, 
    HomeSlideComponent, 
    HomeSlideCardComponent,
    HomeDetailsCardComponent,
    HomeDetailsCardAddComponent,
    HomeDetailsComponent]
})
export class Tab1PageModule {}
