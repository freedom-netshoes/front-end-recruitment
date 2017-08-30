import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavFilterComponent } from './nav-filter.component';

describe('NavFilterComponent', () => {
  let component: NavFilterComponent;
  let fixture: ComponentFixture<NavFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
