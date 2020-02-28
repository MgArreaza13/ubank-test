import { Ruler } from './../../shared/models/ruler';
import { Injectable } from '@angular/core';
import { Goal } from 'src/app/shared/models/goal';


@Injectable()
export class RulesService {

  public rules: Array<Ruler> = [
    {
      goal: '1',
      team: 'Real Madrid',
      event: 'win',
      saving: '200'
    }
  ];


  constructor() { }



  /**
   * return list rules
   */
  public getRules() : Array<Ruler>{
    return this.rules;
  }




}