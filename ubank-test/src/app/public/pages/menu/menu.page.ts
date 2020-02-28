import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(private router: Router) { }

  public menu = [
    {
      title: 'List Rules',
      url:'/rules-list'
    },
    {
      title: 'List Goals',
      url:'/goals-list'
    }
  ]


  ngOnInit() {
  }


  redirect(url){
    this.router.navigate([url]);
  }


  goToHome(){
    this.router.navigate(['/tabs/tab1'])
  }

}
