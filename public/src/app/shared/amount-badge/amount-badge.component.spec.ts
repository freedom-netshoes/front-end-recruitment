import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmountBadgeComponent } from './amount-badge.component';

describe('AmountBadgeComponent', () => {
  let component: AmountBadgeComponent;
  let fixture: ComponentFixture<AmountBadgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmountBadgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmountBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
