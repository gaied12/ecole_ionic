import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SanctionPage } from './sanction.page';

describe('SanctionPage', () => {
  let component: SanctionPage;
  let fixture: ComponentFixture<SanctionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SanctionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SanctionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
