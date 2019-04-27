import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabtestPage } from './labtest.page';

describe('LabtestPage', () => {
  let component: LabtestPage;
  let fixture: ComponentFixture<LabtestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabtestPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabtestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
