import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore' 
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private baseDatos : AngularFirestore, private AFuth: AngularFireAuth) { }

getUsuarios(){
  return this.baseDatos.collection('Usuarios').snapshotChanges();

}

getCollectionParametro<tipo>(path:string, parametro:string, value:string){
  const dataCollection: AngularFirestoreCollection<tipo> = this.baseDatos.collection<tipo>(path,
    ref => ref.where(parametro, '==', value ));
    return dataCollection.valueChanges();
}

}
