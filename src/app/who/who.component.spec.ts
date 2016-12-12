/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WhoComponent } from './who.component';

describe('WhoComponent', () => {
  let component: WhoComponent;
  let fixture: ComponentFixture<WhoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
