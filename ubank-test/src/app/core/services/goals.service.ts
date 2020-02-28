import { Injectable } from '@angular/core';
import { Goal } from 'src/app/shared/models/goal';


@Injectable()
export class GoalsService {

  public goals: Array<Goal> = [];


  constructor() { }



  /**
   * return list goals
   */
  public getGoals(): Array<Goal> {
    return this.goals;
  }


  /**
   * add new Goal
   * @param goal type Goal
   */
  public addGoals(goal: Goal) {
    return new Promise((resolve)=>{
      this.goals.push(goal);
      resolve('New Goals Registered')
  });

  }



}