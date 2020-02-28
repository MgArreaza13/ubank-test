import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-one-goal-details',
  templateUrl: './one-goal-details.page.html',
  styleUrls: ['./one-goal-details.page.scss'],
})
export class OneGoalDetailsPage implements OnInit {

  constructor(private modalController: ModalController, ) { }

  ngOnInit() {
  }
  closeModal() {
    this.modalController.dismiss();
  }
}
