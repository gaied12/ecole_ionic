import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpdStudPage } from './upd-stud.page';

describe('UpdStudPage', () => {
  let component: UpdStudPage;
  let fixture: ComponentFixture<UpdStudPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdStudPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdStudPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
