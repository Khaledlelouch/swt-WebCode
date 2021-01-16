import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})

export class PatientService {

  baseUrl ="http://localhost:8080/api/sekretaeriat/patient"
  constructor(private http: HttpClient) { }

  deletePatient(id :number): Observable<Object>{
  return this.http.delete(`${this.baseUrl}/${id}`);
  }

  getAllPatient(): Observable<Object>{
  return  this.http.get<Patient[]>(`${this.baseUrl}`);
  }
  createPatient(value :any) :Observable<Object>{
    return this.http.post(`${this.baseUrl}`, value);
  }
  updatePatient(id:number , value: any):Observable<Object>{
return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  getPatientByName(value: String):Observable<Object>{
    return this.http.get<Patient[]>(`${this.baseUrl}/${value}`,)
  }

}
