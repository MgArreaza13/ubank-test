import { Ruler } from './../../shared/models/ruler';
import { Injectable } from '@angular/core';
import { Goal } from 'src/app/shared/models/goal';


@Injectable()
export class RulesService {

  public rules: Array<Ruler> = [];


  constructor() { }



  /**
   * return list rules
   */
  public getRules() : Array<Ruler>{
    return this.rules;
  }


  public addRuler(ruler: Ruler){
    let band: boolean = false;
    let countGoal = 0
    return new Promise((resolve, reject)=>{
      // this.goals.push(goal);

      this.rules.map((aRuler:Ruler) => {
        if(ruler.goal === aRuler.goal){
          countGoal += 1;
        }
      })

      if(countGoal < 5){
        if(+ruler.saving < 0){
          reject('Error negative mount')
        }else {
          this.rules.map((aRuler: Ruler) => {
            if(ruler.goal === aRuler.goal && ruler.event === aRuler.event && ruler.team === aRuler.team){
              band = true;
            }
          })
          if(band === true ){
            reject('Error to register ruler try again, already exist in goal')
          }
          else {
            this.rules.push(ruler);
            resolve('New Ruler Registered')
          }
        }   
      }else {
        reject('Error cant register more ruler in this goal');
      }

         
  });
  }




}