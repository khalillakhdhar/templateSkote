import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {
  private apiUrl="localhost:8080/api/reclamations";
  constructor(private http:HttpClient) { }
  // Create a new reclamation
  createReclamation(reclamation: any) {
    return this.http.post(this.apiUrl, reclamation);
  }

  // Read all reclamations
  getReclamations() {
    return this.http.get(this.apiUrl);
  }

  // Read a specific reclamation by ID
  getReclamationById(id: number) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  // Update a reclamation
  updateReclamation(id: number, reclamation: any) {
    return this.http.put(`${this.apiUrl}/${id}`, reclamation);
  }

  // Delete a reclamation
  deleteReclamation(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
