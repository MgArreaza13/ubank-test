import { RulesService } from './../../../core/services/rules.service';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { OneGoalDetailsPage } from '../one-goal-details/one-goal-details.page';
import { Ruler } from 'src/app/shared/models/ruler';

@Component({
  selector: 'app-goals-details',
  templateUrl: './goals-details.page.html',
  styleUrls: ['./goals-details.page.scss'],
})
export class GoalsDetailsPage implements OnInit {
  rules: Array<Ruler> = [];
  constructor(
    private modalController: ModalController,
    private rulesService: RulesService 
  ) { }

  ngOnInit() {
    this.getRules();
  }
  async presentDetail() {
    const modal = await this.modalController.create({
      showBackdrop: true,
      component: OneGoalDetailsPage
    });
    return await modal.present();
  }


  getRules(){
    this.rules = this.rulesService.getRules()
    console.log(this.rules);
  }


}

