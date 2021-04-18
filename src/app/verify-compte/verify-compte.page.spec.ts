import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerifyComptePage } from './verify-compte.page';

describe('VerifyComptePage', () => {
  let component: VerifyComptePage;
  let fixture: ComponentFixture<VerifyComptePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyComptePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerifyComptePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
