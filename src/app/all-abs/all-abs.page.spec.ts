import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AllAbsPage } from './all-abs.page';

describe('AllAbsPage', () => {
  let component: AllAbsPage;
  let fixture: ComponentFixture<AllAbsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllAbsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AllAbsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
