import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GoalsDetailsResultComponent } from './goals-details-result.component';

describe('GoalsDetailsResultComponent', () => {
  let component: GoalsDetailsResultComponent;
  let fixture: ComponentFixture<GoalsDetailsResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalsDetailsResultComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GoalsDetailsResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
