import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DelEmpPage } from './del-emp.page';

describe('DelEmpPage', () => {
  let component: DelEmpPage;
  let fixture: ComponentFixture<DelEmpPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelEmpPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DelEmpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
