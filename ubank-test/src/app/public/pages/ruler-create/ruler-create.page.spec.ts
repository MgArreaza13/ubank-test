import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RulerCreatePage } from './ruler-create.page';

describe('RulerCreatePage', () => {
  let component: RulerCreatePage;
  let fixture: ComponentFixture<RulerCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RulerCreatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RulerCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
