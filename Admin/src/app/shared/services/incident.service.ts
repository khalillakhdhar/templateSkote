import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IncidentService {
  private apiUrl="localhost:8080/api/incidents";
  constructor(private http:HttpClient) { }
  getAllIncidents() {
    return this.http.get(this.apiUrl);
  }

  getIncidentById(id: number) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  createIncident(incident: any) {
    return this.http.post(this.apiUrl, incident);
  }

  updateIncident(id: number, incident: any) {
    return this.http.put(`${this.apiUrl}/${id}`, incident);
  }

  deleteIncident(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
