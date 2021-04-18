import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddAbsPage } from './add-abs.page';

describe('AddAbsPage', () => {
  let component: AddAbsPage;
  let fixture: ComponentFixture<AddAbsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAbsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddAbsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
