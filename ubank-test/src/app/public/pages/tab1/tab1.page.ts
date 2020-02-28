import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {


  public detailsArray: Array<any> = [
    {
      class: 'bg-gradient-orange',
      mount: '5000,00'
    },
    {
      class: 'bg-gradient-purple',
      mount: '3000,00'
    },
    {
      class: 'bg-gradient-pink',
      mount: '2000,00'
    }
  ];


  public rulesArray: Array<any> = [

    {
      title: 'Travel',
      date: '20/02/2020',
      mount: '2000,00'
    },
    {
      title: 'Travel',
      date: '20/02/2020',
      mount: '2000,00'
    },
    {
      title: 'Travel',
      date: '20/02/2020',
      mount: '2000,00'
    }, {
      title: 'Travel',
      date: '20/02/2020',
      mount: '2000,00'
    },
  ]




  constructor() { }




}
