import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompleteInfoService } from '../../patient/complete-history/complete-info.service';
import {FormBuilder, Validators} from '@angular/forms';
import { Medication, UpdateHealthService } from './update-health.service';

@Component({
  selector: 'app-update-health',
  templateUrl: './update-health.component.html',
  styleUrls: ['./update-health.component.css']
})
export class UpdateHealthComponent {

  constructor(private completeInfo : CompleteInfoService, private activatedRoute: ActivatedRoute,
    private _formBuilder: FormBuilder, private route:Router, private updateHealth : UpdateHealthService) {}

  // appointment_Id : string = "ee93e5d4-e48e-4ecd-acd4-c92b953d3fd1"
  // patId : string = "c56b5473-4549-45d2-932b-28fe6c87ea12"
  appointment_Id !: string
  patId !: string

  patientId !: string
  completeHistory !: any

  currentHealth !: any

  firstFormGroup = this._formBuilder.group({
    drug: ['', Validators.required],
    quantity : ['', Validators.required]
  });

  medication !: Medication 
  test !: Test
  con !: conclusion

  secondFormGroup = this._formBuilder.group({
    test: ['', Validators.required],
    result: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    suggestion: ['', Validators.required],
  });
  isLinear = false;
  isLoading = false
  appontId !: string
  docId !: string
  date !: string
  ngOnInit() {
    this.activatedRoute.params.subscribe((data) => {
      this.patientId = data['pid']
      this.appontId = data['aid']
    })
    this.getPatientHealthRecord();
  }

  getPatientHealthRecord(){
    this.completeInfo.getCompleteInfo(this.patientId).subscribe((response) => {
      this.completeHistory = response.body
      // console.log(this.completeHistory[0].moreInfo.)
      if(this.completeHistory != null){
        this.completeHistory.forEach((history : any) => {
          console.log(history);
          // console.log(history.basic[0].appointment_Id, "    ", this.appointment_Id)
          if(history.moreInfo[0].appointment_Id == this.appontId){
            this.docId = history.moreInfo[0].doctor_Id
            this.date = history.moreInfo[0].date_Time
            this.currentHealth = history
          }
        })
      }
    })
  }

  updateMedicine(aid : string) {
    this.medication = {
      health_Id : this.patientId,
      appointment_Id : this.appontId,
      drugs : this.firstFormGroup.getRawValue().drug,
      quantity : this.firstFormGroup.getRawValue().quantity
    }

    
    
    this.updateHealth.updateMedication(this.appontId, this.medication).subscribe((data) => {
      this.isLoading = true
      if(data == null) {
        console.log("Data modified");
      }
      else{
        console.log("Error occured");
      }
      this.isLoading = false
    })
  }

  updateTest(aid : string) {
    this.test = {
      appointment_Id : this.appontId,
      Health_Id : this.patientId,
      test : this.secondFormGroup.getRawValue().test,
      result : this.secondFormGroup.getRawValue().result
    }

    
    
    this.updateHealth.updateTest(this.appontId, this.test).subscribe((data) => {
      this.isLoading = true
      if(data == null) {
        console.log("Data modified");
      }
      else{
        console.log("Error occured");
      }
      this.isLoading = false
    })
  }

  updateCon(aid : string) {
    let DID = ''
    let Date = ''
    this.completeInfo.getCompleteInfo(this.patientId).subscribe((response) => {
      this.completeHistory = response.body
      // console.log(this.completeHistory[0].moreInfo.)
      if(this.completeHistory != null){
        this.completeHistory.forEach((history : any) => {
          console.log(history);
          // console.log(history.basic[0].appointment_Id, "    ", this.appointment_Id)
          if(history.moreInfo[0].appointment_Id == this.appontId){
            DID = history.moreInfo[0].doctor_Id
            Date = history.moreInfo[0].date_Time
            this.currentHealth = history
          }
        })
      }
      this.con = {
        appointment_Id : this.appontId,
        patient_Id : this.patientId,
        conclusion : this.thirdFormGroup.getRawValue().suggestion,
        doctor_Id : DID,
        date_Time: Date
      }
    })
    
    this.updateHealth.updateConclu(this.appontId, this.con).subscribe((data) => {
      this.isLoading = true
      if(data == null) {
        console.log("Data modified");
      }
      else{
        console.log("Error occured");
      }
      this.isLoading = false
    })
  }

  navToDashboard(){
    this.route.navigate(['doctor-dashboard', window.localStorage.getItem('DoctorName'), window.localStorage.getItem('Doctor')]);
  }

}

export interface Test{
  appointment_Id: string | null,
  Health_Id : string |null,
  test: string | null,
  result: string | null
}

export interface conclusion{
  patient_Id: string | null,
  appointment_Id: string | null,
  conclusion: string | null,
  doctor_Id : string | null,
  date_Time : string | null
}