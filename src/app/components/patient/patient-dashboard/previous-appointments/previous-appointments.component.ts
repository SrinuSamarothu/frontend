import { Component, OnInit } from '@angular/core';
import { PreviousAppointmentHistoryService } from '../previous-appointment-history.service';
import { LoginService } from 'src/app/components/login.service';

@Component({
  selector: 'app-previous-appointments',
  templateUrl: './previous-appointments.component.html',
  styleUrls: ['./previous-appointments.component.css']
})
export class PreviousAppointmentsComponent implements OnInit {
  constructor(private service : PreviousAppointmentHistoryService, private serv : LoginService){}
  isLoading = false
  ngOnInit(): void {
    // patientId:"daa9a94b-157e-4130-bdbe-9e2e2847b566"
    let id
    this.serv.getPatientByEmail(window.localStorage.getItem('pEmail')).subscribe((data) => {
      id = data[0].patId
      console.log(id)
    })
    setTimeout(() => {
      this.service.getAppointment(String(window.localStorage.getItem('patientId'))).subscribe((data)=>{
        this.isLoading = true
        this.appot = data
        console.log(data)
        this.isLoading = false
      })      
    }, 2000)
  }
  appot!:any

}
