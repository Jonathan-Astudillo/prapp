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
export class CrudService {

  private coleccionVentanas: AngularFirestoreCollection<ProductoI>;
  private listaVentanas: Observable<ProductoI[]>;

  constructor(private AFStore : AngularFirestore, 
    private AFauth : AngularFireAuth, 
    private AFStorage : AngularFireStorage ) { 

    
    this.coleccionVentanas = this.AFStore.collection<ProductoI>('Ventanas');
    this.listaVentanas = this.coleccionVentanas.snapshotChanges().pipe(map(resp=>{
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

  getVentanas(){
    return this.listaVentanas;
  }

  getVentanaPorId(id : string){
    return this.coleccionVentanas.doc<ProductoI>(id).valueChanges();
  }

  guardarProducto(codigo : string, nombre : string, precio: number, foto:string){

    return new Promise((resolve, rejected)  => {    
        this.AFStore.collection('Ventanas').doc().set({
          codigo: codigo,
          nombre : nombre,
          precio : precio,
          foto : foto
        }).catch(err => rejected(err));
        resolve(true)
  });
  }

  recuperarVentanas(){
    const path = 'Ventanas';
    return  this.AFStore.collection(path).snapshotChanges();
  }

}
