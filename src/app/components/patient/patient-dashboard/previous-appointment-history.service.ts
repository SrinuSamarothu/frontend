import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PreviousAppointmentHistoryService {
  // /api/Appointment/GetAppointmentsByPatientId
  constructor(private http:HttpClient) { }
  getAppointment(PID:string){
    return this.http.get(`/api/Appointment/GetAppointmentsByPatientId?patient_id=${PID}`)
  }
}
