import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConsultNotesPage } from './consult-notes.page';

describe('ConsultNotesPage', () => {
  let component: ConsultNotesPage;
  let fixture: ComponentFixture<ConsultNotesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultNotesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConsultNotesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
