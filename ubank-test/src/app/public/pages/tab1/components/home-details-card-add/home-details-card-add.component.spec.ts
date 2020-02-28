import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeDetailsCardAddComponent } from './home-details-card-add.component';

describe('HomeDetailsCardAddComponent', () => {
  let component: HomeDetailsCardAddComponent;
  let fixture: ComponentFixture<HomeDetailsCardAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeDetailsCardAddComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeDetailsCardAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
