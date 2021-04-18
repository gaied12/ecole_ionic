import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConsulterClassPage } from './consulter-class.page';

describe('ConsulterClassPage', () => {
  let component: ConsulterClassPage;
  let fixture: ComponentFixture<ConsulterClassPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsulterClassPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConsulterClassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
