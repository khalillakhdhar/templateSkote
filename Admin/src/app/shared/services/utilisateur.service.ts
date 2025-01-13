import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Adresse } from '../classes/utilisateur';
import { Utilisateur } from '../classes/utilisateur';


@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  private apiUrl = 'http://localhost:8080/api/utilisateurs'; // URL de votre backend Spring Boot

  constructor(private http: HttpClient) {}

  // Création d'un nouvel utilisateur
  createUtilisateur(utilisateur: Utilisateur): Observable<Utilisateur> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Utilisateur>(this.apiUrl, utilisateur, { headers });
  }

  // Récupération de tous les utilisateurs avec pagination
  getAllUtilisateurs(): Observable<any> {
    let params = new HttpParams();

    return this.http.get<any>(`${this.apiUrl}`, { params });
  }

  // Récupération d'un utilisateur par ID
  getUtilisateurById(id: number): Observable<Utilisateur> {
    return this.http.get<Utilisateur>(`${this.apiUrl}/${id}`);
  }

  // Mise à jour d'un utilisateur
  updateUtilisateur(id: number, utilisateur: Utilisateur): Observable<Utilisateur> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<Utilisateur>(`${this.apiUrl}/${id}`, utilisateur, { headers });
  }

  // Suppression d'un utilisateur
  deleteUtilisateur(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // Assignation d'une adresse à un utilisateur
  assignAdresseToUtilisateur(id: number, adresse: Adresse): Observable<Utilisateur> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Utilisateur>(`${this.apiUrl}/${id}/adresse`, adresse, { headers });
  }
}
