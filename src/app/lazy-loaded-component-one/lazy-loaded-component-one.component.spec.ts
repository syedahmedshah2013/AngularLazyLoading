import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentOne } from './lazy-loaded-component-one.component';

describe('ComponentOne', () => {
  let component: ComponentOne;
  let fixture: ComponentFixture<ComponentOne>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentOne ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentOne);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
