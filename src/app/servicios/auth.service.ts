import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private AFauth : AngularFireAuth, private AFStore : AngularFirestore) { }

  login(email: string, password : string){
    return new Promise((resolve, rejected)  => {
    this.AFauth.signInWithEmailAndPassword(email, password).then(user => {
      resolve(user);
    }).catch(err => rejected(err));
  });

}

logout(){
  this.AFauth.signOut();
}

signUp(email : string, password : string, nombreUsuario : string, celular : string){
  return new Promise((resolve, rejected)  => {
    this.AFauth.createUserWithEmailAndPassword(email, password).then(user => {
      const uid = user.user.uid;
      this.AFStore.collection('Usuarios').doc(uid).set({
        nombres : nombreUsuario,
        email : email,
        uid : uid,
        celular : celular
      })
      resolve(user);

        

    }).catch(err => rejected(err));
});
}

getUserAuth(){
  return this.AFauth.authState;
}

}
