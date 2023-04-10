import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '@auth0/auth0-angular';

export interface details{
    patient_Id: string,
    date_Time: Date,
    nurse_Id : string,
    appointment_Id : string,
    bp : string,
    heart_Rate : number,
    spO2: string,
    weight: string,
    height: string,
    bloodGroup: string,
    temperature: string
}

export interface allergyex{
  health_Id: string,
  appointment_Id: string,
  allergy: string | undefined
}

@Injectable({
  providedIn:'root'
})
export class UpdatebasicrecordService {

  constructor(private http:HttpClient) {}
  saveUser(data:details){
    return this.http.post<details>('/api/PBRecord/AddPBRecords',data)
  }
  savealergy(data:allergyex){
    return this.http.post<allergyex>('/api/PatientAllergy/AddAllergyRecords',data)
  }
  getAllAllergy(){
    return this.http.get('/api/Allergy/GetAllergies')
  }

  // public updatePost(postData: details) {
  //   let endPoints = "123abc"
  //   this.http.put('https://localhost:49165/api/PBRecord/modify/' + endPoints, postData).subscribe(postData => {
  //     console.log(postData);
  //   });
  // }
}

