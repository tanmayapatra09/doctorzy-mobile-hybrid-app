import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatdoctorsPage } from './catdoctors.page';

describe('CatdoctorsPage', () => {
  let component: CatdoctorsPage;
  let fixture: ComponentFixture<CatdoctorsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatdoctorsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatdoctorsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
