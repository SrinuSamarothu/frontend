import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Test, conclusion } from './update-health.component';

@Injectable({
  providedIn: 'root'
})
export class UpdateHealthService {

  constructor(private http : HttpClient) { }

  updateMedication(aid : string, med : Medication) {
    return this.http.put(`/api/Medication/updatemedication/${aid}`, med);
  }

  updateTest(aid : string, med : Test) {
    return this.http.put(`/api/PTest/modifyTest/${aid}`, med);
  }

  updateConclu(aid : string, med : conclusion) {
    return this.http.put(`/api/PHRecord/updateHr/${aid}`, med);
  }
}

export interface Medication{
  health_Id : string,
  appointment_Id : string,
  drugs : string | null,
  quantity : string | null
}