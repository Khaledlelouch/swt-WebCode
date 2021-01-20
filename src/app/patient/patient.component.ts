import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Patient } from '../common/patient';
import { PatientService } from '../common/patient.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  // tslint:disable-next-line:ban-types
  patients: Observable<Object>;
  constructor(private patientService: PatientService, private router: Router) { }

  ngOnInit(): void {
    this.patients = this.patientService.getAllPatient();
  }
  // tslint:disable-next-line:typedef
  deletePatient(id: number){
    this.patientService.deletePatient(id).subscribe(data => {
      console.log(data);
      this.patients = this.patientService.getAllPatient();
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
    console.log('1');
    this.router.navigate(['/createPatient']);
    console.log('1');
  }
  // tslint:disable-next-line:typedef
  onEditPatient(){
    this.router.navigate(['/editPatient']);
  }
}
