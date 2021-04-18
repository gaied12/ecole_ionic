import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddProfPage } from './add-prof.page';

describe('AddProfPage', () => {
  let component: AddProfPage;
  let fixture: ComponentFixture<AddProfPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProfPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddProfPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
