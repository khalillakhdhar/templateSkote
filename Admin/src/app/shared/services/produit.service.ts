import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  private apiUrl="localhost:8080/api/produits";
  constructor(private http:HttpClient) { }
  // Create a produit
  createProduit(produit: any) {
    return this.http.post(this.apiUrl, produit);
  }

  // Read all produits
  getProduits() {
    return this.http.get(this.apiUrl);
  }

  // Read a single produit by ID
  getProduitById(id: number) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  // Update a produit
  updateProduit(id: number, produit: any) {
    return this.http.put(`${this.apiUrl}/${id}`, produit);
  }

  // Delete a produit
  deleteProduit(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
