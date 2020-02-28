import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-details',
  templateUrl: './home-details.component.html',
  styleUrls: ['./home-details.component.scss'],
})
export class HomeDetailsComponent implements OnInit {
  slideOpts = {
    slidesPerView: 1.5,
  }
  @Input() rulesArray: any;
  constructor() { }

  ngOnInit() {}

}
