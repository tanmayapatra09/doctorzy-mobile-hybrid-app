import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergencycontactsPage } from './emergencycontacts.page';

describe('EmergencycontactsPage', () => {
  let component: EmergencycontactsPage;
  let fixture: ComponentFixture<EmergencycontactsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmergencycontactsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmergencycontactsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
