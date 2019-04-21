import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorscreenPage } from './doctorscreen.page';

describe('DoctorscreenPage', () => {
  let component: DoctorscreenPage;
  let fixture: ComponentFixture<DoctorscreenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorscreenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorscreenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
