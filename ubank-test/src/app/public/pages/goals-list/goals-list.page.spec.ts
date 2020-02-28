import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GoalsListPage } from './goals-list.page';

describe('GoalsListPage', () => {
  let component: GoalsListPage;
  let fixture: ComponentFixture<GoalsListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalsListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GoalsListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
