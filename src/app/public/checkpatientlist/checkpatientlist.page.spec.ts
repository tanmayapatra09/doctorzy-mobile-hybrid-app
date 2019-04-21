import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckpatientlistPage } from './checkpatientlist.page';

describe('CheckpatientlistPage', () => {
  let component: CheckpatientlistPage;
  let fixture: ComponentFixture<CheckpatientlistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckpatientlistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckpatientlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
