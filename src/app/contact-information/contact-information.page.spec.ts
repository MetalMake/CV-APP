import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContactInformationPage } from './contact-information.page';

describe('ContactInformationPage', () => {
  let component: ContactInformationPage;
  let fixture: ComponentFixture<ContactInformationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactInformationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContactInformationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
