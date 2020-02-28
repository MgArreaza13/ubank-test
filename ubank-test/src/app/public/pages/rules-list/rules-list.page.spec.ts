import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RulesListPage } from './rules-list.page';

describe('RulesListPage', () => {
  let component: RulesListPage;
  let fixture: ComponentFixture<RulesListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RulesListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RulesListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
