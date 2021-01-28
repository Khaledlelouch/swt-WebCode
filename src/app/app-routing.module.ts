import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { EditPatientComponent } from './edit-patient/edit-patient.component';
import { PatientComponent } from './patient/patient.component';

const routes: Routes = [ {path: '' , redirectTo: 'patient', pathMatch: 'full'},
  {path: 'patient', component: PatientComponent},
  {path: 'createPatient', component: CreatePatientComponent},
  {path: 'editPatient/:id', component: EditPatientComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
