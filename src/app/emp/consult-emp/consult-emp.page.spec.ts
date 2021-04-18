import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConsultEmpPage } from './consult-emp.page';

describe('ConsultEmpPage', () => {
  let component: ConsultEmpPage;
  let fixture: ComponentFixture<ConsultEmpPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultEmpPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConsultEmpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
