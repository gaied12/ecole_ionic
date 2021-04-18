import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeParentPage } from './home-parent.page';

describe('HomeParentPage', () => {
  let component: HomeParentPage;
  let fixture: ComponentFixture<HomeParentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeParentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeParentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
