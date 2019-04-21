import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmenthistoryPage } from './appointmenthistory.page';

describe('AppointmenthistoryPage', () => {
  let component: AppointmenthistoryPage;
  let fixture: ComponentFixture<AppointmenthistoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppointmenthistoryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmenthistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
