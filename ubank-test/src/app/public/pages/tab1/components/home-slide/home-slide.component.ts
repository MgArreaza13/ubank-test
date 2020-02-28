import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-slide',
  templateUrl: './home-slide.component.html',
  styleUrls: ['./home-slide.component.scss'],
})
export class HomeSlideComponent implements OnInit {


  @Input() detailsArray: any;
  


  slideOpts = {
    slidesPerView: 2.5,
    }


  

  constructor() {
   }

  ngOnInit() {
    console.log(this.detailsArray);
  }

}
