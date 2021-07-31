import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection,  } from '@angular/fire/firestore'
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, Subscription } from 'rxjs';
import {ProductoI} from '../models/interface';
import { finalize, map } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class CrudpuertasService {

  private coleccionPuertas: AngularFirestoreCollection<ProductoI>;
  private listaPuertas: Observable<ProductoI[]>;

  constructor(private AFStore : AngularFirestore, 
    private AFauth : AngularFireAuth, 
    private AFStorage : AngularFireStorage) { 

      this.coleccionPuertas = this.AFStore.collection<ProductoI>('Puertas');
      this.listaPuertas = this.coleccionPuertas.snapshotChanges().pipe(map(resp=>{
        return resp.map(resp2 => {
          const data = resp2.payload.doc.data();
          const id = resp2.payload.doc.id;
          return {id, ...data};
        });
      }
      ));
    }

  upLoadImage(file : any, path : string, nombre : string):Promise<string>{
    return new Promise((resolve, rejected) => {
      const filePath = path + '/' + nombre;
      const ref = this.AFStorage.ref(filePath);
      const task = ref.put(file);
      task.snapshotChanges().pipe(
        finalize( () => {
            ref.getDownloadURL().subscribe(res => {
              resolve(res);
              return;
            })
        })
      ).subscribe();
      
    });
  }

  getPuertas(){
    return this.listaPuertas;
  }

  getPuertaPorId(id : string){
    return this.coleccionPuertas.doc<ProductoI>(id).valueChanges();
  }

  guardarPuerta(codigo : string, nombre : string, precio: number, foto:string){

    return new Promise((resolve, rejected)  => {    
        this.AFStore.collection('Puertas').doc().set({
          codigo: codigo,
          nombre : nombre,
          precio : precio,
          foto : foto
        }).catch(err => rejected(err));
        resolve(true)
  });
  }

  recuperarPuertas(){
    const path = 'Puertas';
    return  this.AFStore.collection(path).snapshotChanges();
  }

}
