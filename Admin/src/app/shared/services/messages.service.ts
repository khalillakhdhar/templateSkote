import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(
    private firestore: AngularFirestore
  ) { }


  create_NewMessage(record) {
    let id=localStorage.getItem("usid");
    return this.firestore.collection("Users/"+id+"/Messages").add(record);
  }

  read_Messages(id) {
    return this.firestore.collection("Users/"+id+"/Messages", ref => ref.orderBy('date'))
    .snapshotChanges();
    }
  read_clientsMessages(id) {
    return this.firestore.collection("Messages", (ref) => ref.where("recieverid", "==", id))
    .snapshotChanges();



  }

  delete_Message(record_id) {

    this.firestore.doc('Messages/' + record_id).delete();
  }
}
