import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatFiltersComponent } from './stat-filters.component';

describe('StatFiltersComponent', () => {
  let component: StatFiltersComponent;
  let fixture: ComponentFixture<StatFiltersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatFiltersComponent]
    });
    fixture = TestBed.createComponent(StatFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
