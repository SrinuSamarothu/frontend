import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompleteInfoService {

  constructor(private http : HttpClient) { }

  API_URL : string = "/api/History/GetCompleteHistory/"
  API_URL_DOC : string = "/api/Doctor/byId?id="
  getCompleteInfo(pid:string | undefined){
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    return this.http.get(this.API_URL+pid, {headers, observe:'response'})
  }
  getDoctorName(did:string|undefined){
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    return this.http.get(this.API_URL_DOC+did, {headers, observe:'response'})
  }
}
