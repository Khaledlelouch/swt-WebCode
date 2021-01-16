import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { EditPatientComponent } from './edit-patient/edit-patient.component';

const routes: Routes = [ {path:'' , redirectTo:'patient', pathMatch:'full'},
{path:'patient', component:AppComponent},
{path:'createPatient',component:CreatePatientComponent},
{path:'editPatient',component:EditPatientComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
