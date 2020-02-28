import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { OneGoalDetailsPage } from '../one-goal-details/one-goal-details.page';

@Component({
  selector: 'app-goals-details',
  templateUrl: './goals-details.page.html',
  styleUrls: ['./goals-details.page.scss'],
})
export class GoalsDetailsPage implements OnInit {

  constructor(
    private modalController: ModalController,
  ) { }

  ngOnInit() {
  }
  async presentDetail() {
    const modal = await this.modalController.create({
      showBackdrop: true,
      component: OneGoalDetailsPage
    });
    return await modal.present();
  }
}

