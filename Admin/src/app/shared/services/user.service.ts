import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private firestore: AngularFirestore) { }
createNewUser(user: any) {
  let us=Object.assign({},user);
return this.firestore.collection('Users').add(user);

}
getAllUsers() {
return this.firestore.collection('Users').snapshotChanges();
}
updateUser(userId: any, user: any) {
  return this.firestore.collection('Users').doc(userId).update(user);
}
deleteUser(userId: any) {
  return this.firestore.collection('Users').doc(userId).delete();
}
// getUsers by role 
getUsersByRole(role: any) {
  return this.firestore.collection('Users', ref => ref.where('role', '==', role)).snapshotChanges();
}

getCurrentUser() {
  // get email from local storage authUser json data

  let user = JSON.parse(sessionStorage.getItem('authUser') || '{}');
  console.log(user);
  let email = user.email;
  //console.log(email);
  return this.firestore.collection("Users", (ref) => ref.where("email", "==", email))
    .snapshotChanges();
}


// getUsers by id
getUserById(userId: any) {
  return this.firestore.collection('Users').doc(userId).snapshotChanges();
}


}
