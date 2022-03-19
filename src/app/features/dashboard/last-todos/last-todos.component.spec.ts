/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LastTodosComponent } from './last-todos.component';

describe('LastTodosComponent', () => {
  let component: LastTodosComponent;
  let fixture: ComponentFixture<LastTodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastTodosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
