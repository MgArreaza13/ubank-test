import { GoalsService } from './../../../core/services/goals.service';
import { Component, OnInit } from '@angular/core';
import { Goal } from 'src/app/shared/models/goal';

@Component({
  selector: 'app-goals-list',
  templateUrl: './goals-list.page.html',
  styleUrls: ['./goals-list.page.scss'],
})
export class GoalsListPage implements OnInit {

  goals: Array<Goal> = [];
  constructor(
    private goalsService: GoalsService
  ) { }

  ngOnInit() {
    this.getGoals();
  }


  /**
   * get goals service
   */
  getGoals(){
    this.goals = this.goalsService.getGoals();
  }

}
