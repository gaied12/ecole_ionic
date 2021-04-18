import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConsultProfPage } from './consult-prof.page';

describe('ConsultProfPage', () => {
  let component: ConsultProfPage;
  let fixture: ComponentFixture<ConsultProfPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultProfPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConsultProfPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
