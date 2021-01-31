
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { PatientService } from '../common/patient.service';

import { Observable } from 'rxjs';
import { Patient } from '../common/patient';
@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.css']
})
export class EditPatientComponent implements OnInit {

  editPatientForm: FormGroup;
  constructor(private router: Router, private patientService: PatientService, private route: ActivatedRoute) { }
  id: number;
  patient: any;

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    console.log(this.id);

    this.patientService.getPatientById(this.id).subscribe(data => {
        console.log(data);

        this.patient = data;
        console.log(this.patient.zimmerNr);
      console.log(this.patient.stationNr)
        this.editPatientForm = new FormGroup({
          vorname: new FormControl(this.patient.vorname),
          nachname: new FormControl(this.patient.nachname),
          geburtstag: new FormControl(this.patient.geburtstag),
          einzugsDatum: new FormControl(this.patient.einzugsDatum),
          strasse: new FormControl(this.patient.strasse),
          hausnr: new FormControl(this.patient.hausnr),
          postleitzahl: new FormControl(this.patient.postleitzahl),
          ort: new FormControl(this.patient.ort),
          mobilnummer: new FormControl(this.patient.mobilnummer),
          allergien: new FormControl(this.patient.allergien),
          ernaehrungstyp: new FormControl(this.patient.ernaehrungstyp),
          zimmerNummer: new FormControl(this.patient.zimmerNr),
          stationNummer: new FormControl(this.patient.stationNr),
          erkrankung: new FormControl(this.patient.erkrankung)
        });
      }, error => {console.log(error); }
    );

    this.editPatientForm = new FormGroup({
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
    this.patientService.updatePatient(this.id, this.editPatientForm.value).subscribe(data => {
      console.log(data);
    }, error => {console.log(error); });
    this.router.navigate(['']);
  }

}
