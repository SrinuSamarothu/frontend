import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpdateHealthService {

  constructor(private http : HttpClient) { }

  updateMedication(aid : string, med : Medication) {
    return this.http.put(`/api/Medication/updatemedication/${aid}`, med);
  }
}

export interface Medication{
  health_Id : string,
  appointment_Id : string,
  drugs : string | null,
  quantity : string | null
}