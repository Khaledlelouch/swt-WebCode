import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Patient } from './common/patient';
import { PatientService } from './common/patient.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'verpflegungsService';


patients : Observable<Object>;
constructor(private patientService : PatientService, private router : Router) { }

ngOnInit(): void {
  this.patients= this.patientService.getAllPatient();
 
}
deletePatient(id :number){
    this.patientService.deletePatient(id).subscribe(data =>{
      console.log(data);
      this.patients= this.patientService.getAllPatient();
    },error=>console.log(error)) 
  }

  updatePatient(id:number, patient: Patient){
    this.patientService.updatePatient(id, patient).subscribe(data =>{
      console.log(data);
      this.patients=  this.patients= this.patientService.getAllPatient();
    },error =>console.log(error)
    )
  }
  onCreatePatient(){
    console.log("1")
this.router.navigate(['/createPatient']);
console.log("1")
  }
  onEditPatient(){
    this.router.navigate(['/editPatient']);
  }
}


