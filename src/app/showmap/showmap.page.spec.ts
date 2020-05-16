import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowmapPage } from './showmap.page';

describe('ShowmapPage', () => {
  let component: ShowmapPage;
  let fixture: ComponentFixture<ShowmapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowmapPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowmapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
