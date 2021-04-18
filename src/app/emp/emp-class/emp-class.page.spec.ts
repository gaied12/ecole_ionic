import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EmpClassPage } from './emp-class.page';

describe('EmpClassPage', () => {
  let component: EmpClassPage;
  let fixture: ComponentFixture<EmpClassPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpClassPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EmpClassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
