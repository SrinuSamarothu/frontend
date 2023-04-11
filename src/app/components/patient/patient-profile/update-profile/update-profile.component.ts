import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Guid } from 'guid-typescript';
import { LoginService, PatientInfo } from 'src/app/components/login.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {
  constructor(private router : Router, private fb: FormBuilder, private patService : LoginService){}
  
  navToDash(){
    this.router.navigate(['patient-dashboard'])
  }
  isLoading = false
  updateForm !: FormGroup
  
  pat : any[] = []
  PID !: Guid
  ngOnInit(): void {
    let email = window.localStorage.getItem("pEmail")
     this.patService.getPatientByEmail(email).subscribe((data) => {
        data.forEach(p=>{
          this.pat.push(p)
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
    console.log(this.updateForm.getRawValue())
    // this.pat.forEach(element => {
    //   if(element.email == window.localStorage.getItem("pEmail")){
    //     this.PID = element.Pat_id
    //   }
    //   this.patService.updatePatient(this.PID, this.updateForm.getRawValue()).subscribe((data)=>{
    //     console.log(data)
    //   })
    // });
  }
}
