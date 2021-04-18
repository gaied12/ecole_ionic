import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConsulterStudPage } from './consulter-stud.page';

describe('ConsulterStudPage', () => {
  let component: ConsulterStudPage;
  let fixture: ComponentFixture<ConsulterStudPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsulterStudPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConsulterStudPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
