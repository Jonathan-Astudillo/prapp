import { Component, OnInit } from '@angular/core';
import {CrudsillasService} from '../../servicios/crudsillas.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingresosillas',
  templateUrl: './ingresosillas.page.html',
  styleUrls: ['./ingresosillas.page.scss'],
})
export class IngresosillasPage implements OnInit {

  codigo : string = '';
  nombre : string = '';
  precio : number = 0;
  foto : any;
  path:string = "";

  constructor(private crudsillasService: CrudsillasService, 
    private router : Router) { }

  ngOnInit() {
  }

  async OnGuardarSillas(){
    console.log(this.foto);
      this.path = await this.OnNuevaImagenSilla(this.foto);
      console.log(this.path);
      this.crudsillasService.guardarSilla(this.codigo, this.nombre, this.precio, this.path).then(producto =>{
        this.router.navigate(['/sillas']);
      }).catch(error => alert('No se pudo Guardar el producto Silla.'))
  
    }

    async OnNuevaImagenSilla(file : any){
      const path = 'Sillas';
      const name = file.name;
      const res = await this.crudsillasService.upLoadImage(file, path, name);
      return res;
    }
  
    OnCargarImagenSilla(event : any){
        if(event.target.files && event.target.files[0])
        {
          const reader = new FileReader();
          reader.onload= ((image)=> {
            this.foto = event.target.files[0];
            const nombre = this.foto.name;
          });
          reader.readAsDataURL(event.target.files[0]);
          
        }
      }

}
