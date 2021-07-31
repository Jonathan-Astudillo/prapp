
import { Component, OnInit } from '@angular/core';
import {UsuariosService} from '../servicios/usuarios.service';
import { InterfaceUsuario } from '../models/interface';
import { AuthService } from '../servicios/auth.service';
import { AngularFirestore } from '@angular/fire/firestore'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  uid : string;
  usuarioLogueado : string = "";
  constructor(private usuarioService: UsuariosService, 
    private authService : AuthService, 
    private AFStore: AngularFirestore) {}

ngOnInit(){

  const path = 'Usuarios';

  this.authService.getUserAuth().subscribe(res => {
            this.uid = res.uid,
            this.usuarioLogueado = res.displayName
            } 
            );
    }
}
