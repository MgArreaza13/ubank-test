import { GoalsService } from './../../../core/services/goals.service';
import { Component, OnInit } from '@angular/core';
import { Goal } from 'src/app/shared/models/goal';

@Component({
  selector: 'app-goal-create',
  templateUrl: './goal-create.page.html',
  styleUrls: ['./goal-create.page.scss'],
})
export class GoalCreatePage implements OnInit {

  constructor(
    private goalsService: GoalsService
  ) { }

  ngOnInit() {
    console.log(this.goalsService.getGoals());    
  }


  addGoal(){
    const goal: Goal = {
      id: 'string',
      type: 'string',
      date: 'string',
      mount: '2000'
    }
    this.goalsService.addGoals(goal);
    console.log(this.goalsService.getGoals());
  }



}
