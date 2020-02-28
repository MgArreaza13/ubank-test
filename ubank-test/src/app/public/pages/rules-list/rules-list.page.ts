import { Router } from '@angular/router';
import { RulesService } from './../../../core/services/rules.service';
import { Component, OnInit } from '@angular/core';
import { Ruler } from 'src/app/shared/models/ruler';

@Component({
  selector: 'app-rules-list',
  templateUrl: './rules-list.page.html',
  styleUrls: ['./rules-list.page.scss'],
})
export class RulesListPage implements OnInit {

  rules: Array<Ruler> = [];

  constructor(
    private rulesServices: RulesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getRules();
  }



  /**
   * get rules from service
   */
  getRules() {
    this.rules = this.rulesServices.getRules();
  }

  goToHome(){
    this.router.navigate(['/tabs/tab1'])
  }

  goToNewRuler(){
    this.router.navigate(['/ruler-create']);
  }
}
