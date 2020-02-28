import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-slide-card',
  templateUrl: './home-slide-card.component.html',
  styleUrls: ['./home-slide-card.component.scss'],
})
export class HomeSlideCardComponent implements OnInit {
 
  @Input() dataSlide: any;
  constructor() { }

  ngOnInit() {}

}
