import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NurseService {

  constructor(private http : HttpClient) { }
  gatewayUrl = "http://localhost:5103/apigateway/AddNurse"
  addNurse(nurse : Nurse){
    return this.http.post("/api/Nurse/AddNurse", nurse)
    .pipe(catchError(err => of('error',err)))
  }
}

export interface Nurse{
  name : string | undefined
  email : string  | undefined
  phone_no : number | undefined 
}
