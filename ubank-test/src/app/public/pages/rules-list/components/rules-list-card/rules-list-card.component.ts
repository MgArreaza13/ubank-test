import { Component, OnInit, Input } from '@angular/core';
import { Ruler } from 'src/app/shared/models/ruler';

@Component({
  selector: 'app-rules-list-card',
  templateUrl: './rules-list-card.component.html',
  styleUrls: ['./rules-list-card.component.scss'],
})
export class RulesListCardComponent implements OnInit {

  @Input() ruler:  Ruler;
  constructor() { }

  ngOnInit() {}

}
