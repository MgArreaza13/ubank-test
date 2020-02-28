import { Injectable } from '@angular/core';
import { Goal } from 'src/app/shared/models/goal';


@Injectable()
export class GoalsService {

  public goals: Array<Goal> = [
    {
      id: "7oQ8cc4kwLG0LF3g",
      type: 'Travel',
      date: "2020-02-28T14:48:14.615-04:00",
      mount: '2000'
    },
    {
      id: "8oQ8cc4kwLG0LF3g",
      type: 'Travel 2',
      date: "2020-02-28T14:48:14.615-04:00",
      mount: '2000'
    },
    {
      id: "9oQ8cc4kwLG0LF3g",
      type: 'Travel 3',
      date: "2020-02-28T14:48:14.615-04:00",
      mount: '2000'
    }
  ];


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
    return new Promise((resolve, reject)=>{
      if(+goal.mount < 0 ){
        reject('Error negative mount');
      }else {
        this.goals.push(goal);
        resolve('New Goals Registered')
      }
  });

  }



}