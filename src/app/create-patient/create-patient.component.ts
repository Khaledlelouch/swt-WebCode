import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PatientService } from '../common/patient.service';

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.css']
})
export class CreatePatientComponent implements OnInit {
  createPatientForm: FormGroup;

  constructor(private router: Router, private service: PatientService) { }

  ngOnInit(): void {
    this.createPatientForm = new FormGroup({
      vorname: new FormControl(null),
      nachname: new FormControl(null),
      geburtstag: new FormControl(null),
      einzugsDatum: new FormControl(null),
      strasse: new FormControl(null),
      hausnr: new FormControl(null),
      postleitzahl: new FormControl(null),
      ort: new FormControl(null),
      mobilnummer: new FormControl(null),
      allergien: new FormControl(null),
      ernaehrungstyp: new FormControl(null),
      zimmerNummer: new FormControl(null),
      stationNummer: new FormControl(null),
      erkrankung: new FormControl(null)
    });
  }
  // tslint:disable-next-line:typedef
  onSubmit(){
    console.log(this.createPatientForm.value);
    this.service.createPatient(this.createPatientForm.value).subscribe(data => {
      console.log(data);
    }, error => {console.log(error); } );
    this.router.navigate(['']);
  }

  // tslint:disable-next-line:typedef
  dashBoard(){
    this.router.navigate(['']);
  }
  // tslint:disable-next-line:typedef
//[disabled] =!createPatientForm.valid
}
