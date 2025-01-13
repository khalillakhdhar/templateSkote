import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {
  private apiUrl="localhost:8080/api/demandes";
  constructor(private http:HttpClient) { }
  //crud
  getAllDemandes()
  {
    return this.http.get(this.apiUrl);

  }
  getDemandeById(id)
  {
    return this.http.get(this.apiUrl+"/"+id);
  }
  createDemande(demande)
  {
    return this.http.post(this.apiUrl,demande);
  }
  updateDemande(demande)
  {
    return this.http.put(this.apiUrl+"/"+demande.id,demande);
  }
  deleteDemande(id)
  {
    return this.http.delete(this.apiUrl+"/"+id);
  }
  assignUtilisateurToDemande(id,utilisateur)
  {
    return this.http.post(this.apiUrl+"/"+id+"/utilisateur",utilisateur);
  }
  
}
