import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousAppointmentsComponent } from './previous-appointments.component';

describe('PreviousAppointmentsComponent', () => {
  let component: PreviousAppointmentsComponent;
  let fixture: ComponentFixture<PreviousAppointmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviousAppointmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreviousAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
