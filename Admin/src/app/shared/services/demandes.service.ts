import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DemandesService {

  constructor(private firestore: AngularFirestore) { }

  createNewDemande(demande: any) {
    return this.firestore.collection('Demandes').add(demande);
  }

  getAllDemandes() {
    return this.firestore.collection('Demandes').snapshotChanges();
  }

  updateDemande(demandeId: any, demande: any) {
    return this.firestore.collection('Demandes').doc(demandeId).update(demande);
  }

  deleteDemande(demandeId: any) {
    return this.firestore.collection('Demandes').doc(demandeId).delete();
  }

  // getDemandes by id
  getDemandeById(demandeId: any) {
    return this.firestore.collection('Demandes').doc(demandeId).snapshotChanges();
  }

  // Accepter une demande
  accepterDemande(demandeId: any) {
    return this.firestore.collection('Demandes').doc(demandeId).update({ etat: 'acceptée' });
  }

  // Refuser une demande
  refuserDemande(demandeId: any) {
    return this.firestore.collection('Demandes').doc(demandeId).update({ etat: 'annulé' });
  }
}
