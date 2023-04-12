import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Guid } from 'guid-typescript';
import { LoginService, PatientInfo, updatePatient, upw } from 'src/app/components/login.service';
import { AddedSnackBarComponent } from 'src/app/components/doctor/added-snack-bar/added-snack-bar.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {
  constructor(private router : Router, private fb: FormBuilder, private patService : LoginService, private _snackBar: MatSnackBar){}
  
  navToDash(){
    this.router.navigate(['patient-dashboard'])
  }
  openSnackBar() {
    this._snackBar.openFromComponent(AddedSnackBarComponent, {
      duration: 2500,
    });
  }
  isLoading = false
  updateForm !: FormGroup
  
  pat : any[] = []
  PID !: string | null
  ngOnInit(): void {
    let email = window.localStorage.getItem("pEmail")
     this.patService.getPatientByEmail(email).subscribe((data) => {
      this.isLoading = true
        data.forEach(p=>{
          this.pat.push(p)
          this.isLoading = false
        })
     });

    this.updateForm = this.fb.group({
      email: window.localStorage.getItem('pEmail'),
      fullname: [''],
      gender : [''],
      pasword: [''],
      age: [''],
      phone: [''],
      adressLine: [''],
      city: [''],
      state: [''],      
    })
  }
  updateData(){
    this.isLoading = true
    let data : updatePatient = {
      adressLine: this.updateForm.getRawValue().adressLine,
      fullname: this.updateForm.getRawValue().fullname,
      age: Number(this.updateForm.getRawValue().age),
      gender: this.updateForm.getRawValue().gender,
      email:  String(window.localStorage.getItem('pEmail')), 
      pasword: this.updateForm.getRawValue().pasword,
      phone: Number(this.updateForm.getRawValue().gender),
      state: this.updateForm.getRawValue().state,
      city: this.updateForm.getRawValue().city
    }
    
    console.log(this.updateForm.getRawValue())
      // patientId:"daa9a94b-157e-4130-bdbe-9e2e2847b566"
      this.PID = window.localStorage.getItem("patientId")
      this.PID?.toString()
      let newid = this.PID as unknown as Guid
      this.patService.updatePatient(newid, data).subscribe((data)=>{
        this.isLoading = false
        if(data.status != 400 || data.status != 404 || data.status != 401){
          this.openSnackBar()
        }
      })
      
  }
  
  updatePassword(){
    let data1 : upw = {
      loginId: String(Guid.create()),
      email: String(window.localStorage.getItem('pEmail')),
      password: this.updateForm.getRawValue().pasword, 
    }
    console.log(this.updateForm.getRawValue().pasword.toString())
    
    if(this.updateForm.getRawValue().pasword.toString() !== "" || this.updateForm.getRawValue().pasword.toString() !== " " || this.updateForm.getRawValue().pasword.toString() !== null){
      if(data1.password.toString() !== "" || data1.password.toString() !== null || this.updateForm.getRawValue().pasword.toString() !== '<empty string>'){
        this.patService.updatePassword(data1).subscribe(res=>{
          console.log(res)
        })
      }
    }
  }
}

