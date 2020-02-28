import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-details-card',
  templateUrl: './home-details-card.component.html',
  styleUrls: ['./home-details-card.component.scss'],
})
export class HomeDetailsCardComponent implements OnInit {

  @Input() dataCard: any;
  constructor() { }

  ngOnInit() {}

}
