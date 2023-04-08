import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Guid } from 'guid-typescript';

@Injectable({
  providedIn: 'root'
})
export class AddScheduleService {
  selectedDate !: Date
  Docemail !: string | undefined

  constructor(private http: HttpClient) { }
  gatewayUrl = "http://localhost:5103/apigateway/DoctorByEmail"
  AddSchedule(email : string) {
    return this.http.get<any>(`/api/Doctor/GetByEmail?e=${email}`);
  }
}
