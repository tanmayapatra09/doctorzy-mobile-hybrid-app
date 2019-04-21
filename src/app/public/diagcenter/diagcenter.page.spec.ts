import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagcenterPage } from './diagcenter.page';

describe('DiagcenterPage', () => {
  let component: DiagcenterPage;
  let fixture: ComponentFixture<DiagcenterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiagcenterPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagcenterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
