import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardHabitacionesComponent } from './dashboard-habitaciones.component';

describe('DashboardHabitaciones', () => {
  let component: DashboardHabitacionesComponent;
  let fixture: ComponentFixture<DashboardHabitacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardHabitacionesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardHabitacionesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
