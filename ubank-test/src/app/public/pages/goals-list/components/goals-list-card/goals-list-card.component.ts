import { Goal } from './../../../../../shared/models/goal';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-goals-list-card',
  templateUrl: './goals-list-card.component.html',
  styleUrls: ['./goals-list-card.component.scss'],
})
export class GoalsListCardComponent implements OnInit {

  @Input() goal: Goal;
  
  constructor() { }

  ngOnInit() {}

}
