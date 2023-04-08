
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppointmentDoctor } from 'src/app/models/appointmentServiceModel';
import { Observable } from 'rxjs';
import { Guid } from 'guid-typescript';
import { patientinfo } from 'src/app/models/patientinfomodel';
import { PatientInfo } from '../components/login.service';

@Injectable({
  providedIn: 'root',
})
export class PatientInfoService {
  constructor(private http: HttpClient) {}

  baseapiurl: string = 'http://localhost:5103';

  getAllPatientInfos() {
    return this.http.get<PatientInfo[]>(`/api/PatientInfo/GetallPatientInfo`);
  }


  getPatientInfo(patientId : string | undefined | null) : Observable<patientinfo>{

    return this.http.get<patientinfo>(`/api/PatientInfo/GetPatientInfobyId/${patientId}`);
  }
}

export interface PatientAppointmentInfo {
    appointment : AppointmentDoctor
    patient : PatientInfo
}
