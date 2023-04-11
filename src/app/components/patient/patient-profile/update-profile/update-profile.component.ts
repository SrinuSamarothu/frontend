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
      fullname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      gender : ['', [Validators.pattern("^(male|female|other|Male|Female|Other)$")]],
      pasword: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      age: ['', [Validators.required, Validators.pattern("^[1-6][0-9]$")]],
      phone: [''],
      adress_line: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      city: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      State: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],      
    })
  }

  updateData(){
    this.pat.forEach(element => {
      if(element.email == window.localStorage.getItem("pEmail")){
        this.PID = element.Pat_id
      }
      this.patService.updatePatient(this.PID, this.updateForm.getRawValue()).subscribe((data)=>{
        console.log(data)
      })
    });
  }
}
