import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// @ts-ignore
import { Patient } from '../common/patient';

import { Observable } from 'rxjs';
// @ts-ignore
import { PatientService } from '../common/patient.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  search: any;
  patients: any;
  constructor(private patientService: PatientService, private router: Router) { }

  ngOnInit(): void {
    this.patientService.getAllPatient().subscribe(data => {
      console.log(data[0].id);
      this.patients = data; });

  }
  // tslint:disable-next-line:typedef
  deletePatient(id: number){
    this.patientService.deletePatient(id).subscribe(data => {
      console.log(data);

    }, error => console.log(error));

  }

  // tslint:disable-next-line:typedef
  updatePatient(id: number, patient: Patient){
    this.patientService.updatePatient(id, patient).subscribe(data => {
        console.log(data);
        this.patients =  this.patients = this.patientService.getAllPatient();
      }, error => console.log(error)
    );
  }
  // tslint:disable-next-line:typedef
  onCreatePatient(){
    this.router.navigate(['/createPatient']);
  }
  // tslint:disable-next-line:typedef
  onEditPatient(id: number){
    this.router.navigate(['/editPatient', id]);
  }

  // tslint:disable-next-line:typedef
  patientSearched(){
    this.patientService.getPatientByName(this.search).subscribe(data => {
      console.log(this.search);
      this.patients = data; }, error => {
      console.log(error);
    });
  }

  // tslint:disable-next-line:typedef
  searchPatient() {
    this.patientService.getPatientByName(this.search).subscribe(data => {
      console.log(data[0].id);
      this.patients = data; }, error => {
      console.log(error);
    });
  }
}
