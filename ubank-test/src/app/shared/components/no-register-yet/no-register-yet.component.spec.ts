import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NoRegisterYetComponent } from './no-register-yet.component';

describe('NoRegisterYetComponent', () => {
  let component: NoRegisterYetComponent;
  let fixture: ComponentFixture<NoRegisterYetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoRegisterYetComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NoRegisterYetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
