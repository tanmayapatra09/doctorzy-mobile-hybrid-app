import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchdoctorsPage } from './searchdoctors.page';

describe('SearchdoctorsPage', () => {
  let component: SearchdoctorsPage;
  let fixture: ComponentFixture<SearchdoctorsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchdoctorsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchdoctorsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
