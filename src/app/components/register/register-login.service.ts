import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, catchError, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegisterLoginService {
  constructor(private http: HttpClient) {}
  Rurl = "/api/PatientInfo/AddnewPatientinfo"
  Lurl = "/api/PatientLogin/Add"
  // UserExists = "http://localhost:5103/apigateway/LoginGet"

  getUser(email : string, password : string){
    let params = new HttpParams()
    params = params.append('email', email)
    params = params.append('password', password)
    return this.http.get('/api/PatientLogin/Get', {params : params})
      .pipe(catchError(err => of('error',err)))
  }
  
  addNewUser(user : User) {
    return this.http.post<User>(this.Rurl, user)
      .pipe(catchError(err => of('error',err)))
  }
  addNewLogin(user : UserLogin){
    return this.http.post<any>(this.Lurl, user)
      .pipe(catchError(err => of('error',err)))
  }
}

export interface UserLogin{
  loginId ?: string
  email: string
  password: string
}
export interface User {
  fullname: string;
  age: number;
  gender: string;
  email: string;
  pasword: string;
  phone: number;
  adressLine: string;
  city: string;
  state: string;
  created: string;
}
