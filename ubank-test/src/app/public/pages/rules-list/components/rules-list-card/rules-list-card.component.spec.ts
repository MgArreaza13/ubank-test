import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RulesListCardComponent } from './rules-list-card.component';

describe('RulesListCardComponent', () => {
  let component: RulesListCardComponent;
  let fixture: ComponentFixture<RulesListCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RulesListCardComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RulesListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
