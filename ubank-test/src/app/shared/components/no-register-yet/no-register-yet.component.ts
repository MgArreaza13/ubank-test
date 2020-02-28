import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-no-register-yet',
  templateUrl: './no-register-yet.component.html',
  styleUrls: ['./no-register-yet.component.scss'],
})
export class NoRegisterYetComponent implements OnInit {

  @Input() componentName: string;
  constructor() { }

  ngOnInit() {}

}
