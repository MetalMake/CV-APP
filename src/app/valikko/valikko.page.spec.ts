import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ValikkoPage } from './valikko.page';

describe('ValikkoPage', () => {
  let component: ValikkoPage;
  let fixture: ComponentFixture<ValikkoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValikkoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ValikkoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
