import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GoalCreatePage } from './goal-create.page';

describe('GoalCreatePage', () => {
  let component: GoalCreatePage;
  let fixture: ComponentFixture<GoalCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalCreatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GoalCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
