import { Ruler } from 'src/app/shared/models/ruler';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-goals-details-card',
  templateUrl: './goals-details-card.component.html',
  styleUrls: ['./goals-details-card.component.scss'],
})
export class GoalsDetailsCardComponent implements OnInit {

  @Input() dataRuler: Ruler;
  constructor() { }

  ngOnInit() {}

}
