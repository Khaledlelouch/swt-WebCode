import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})

export class PatientService {

  baseUrl = 'http://localhost:8080/api/sekretaeriat/patient';
  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:ban-types
  deletePatient(id: number): Observable<Object>{
  return this.http.delete(`${this.baseUrl}/${id}`);
  }

  // tslint:disable-next-line:ban-types
  getAllPatient(): Observable<Object>{
  return  this.http.get<Patient[]>(`${this.baseUrl}`);
  }
  // tslint:disable-next-line:ban-types
  createPatient(value: any): Observable<Object>{
    return this.http.post(`${this.baseUrl}`, value);
  }
  // tslint:disable-next-line:ban-types
  updatePatient(id: number , value: any): Observable<Object>{
return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  // tslint:disable-next-line:ban-types
  getPatientByName(value: String): Observable<Object>{
    return this.http.get<Patient[]>(`${this.baseUrl}/${value}`, );
  }

}
