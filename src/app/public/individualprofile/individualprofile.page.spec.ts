import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualprofilePage } from './individualprofile.page';

describe('IndividualprofilePage', () => {
  let component: IndividualprofilePage;
  let fixture: ComponentFixture<IndividualprofilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndividualprofilePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualprofilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
