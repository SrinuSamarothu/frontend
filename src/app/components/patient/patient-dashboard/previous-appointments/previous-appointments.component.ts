import { Component, OnInit } from '@angular/core';
import { PreviousAppointmentHistoryService } from '../previous-appointment-history.service';

@Component({
  selector: 'app-previous-appointments',
  templateUrl: './previous-appointments.component.html',
  styleUrls: ['./previous-appointments.component.css']
})
export class PreviousAppointmentsComponent implements OnInit {
  constructor(private service : PreviousAppointmentHistoryService){}
  ngOnInit(): void {
    // patientId:"daa9a94b-157e-4130-bdbe-9e2e2847b566"
    this.service.getAppointment(String(window.localStorage.getItem('patientId'))).subscribe((data)=>{
      this.appot = data
      console.log(data)
    })
  }
  appot!:any

}
