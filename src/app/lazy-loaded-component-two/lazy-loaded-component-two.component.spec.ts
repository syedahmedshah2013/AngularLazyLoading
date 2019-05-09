import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyLoadedComponentTwo } from './lazy-loaded-component-two.component';

describe('LazyLoadedComponentTwo', () => {
  let component: LazyLoadedComponentTwo;
  let fixture: ComponentFixture<LazyLoadedComponentTwo>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyLoadedComponentTwo ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyLoadedComponentTwo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
