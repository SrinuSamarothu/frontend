import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Doctor } from '../doctor';
import { Observable, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorSeviceService {

  constructor(private http : HttpClient) { }
  gateWayUrl = "http://localhost:5103/apigateway/AddDoctor"
  addDoctor(doctor : Doctor){
    return this.http.post<any>("/api/Doctor/addDoctor", doctor)
    .pipe(catchError(err => of('error',err)))
  }
}
