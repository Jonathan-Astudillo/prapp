import { Component, OnInit } from '@angular/core';
import {CrudpuertasService} from '../../servicios/crudpuertas.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingresopuertas',
  templateUrl: './ingresopuertas.page.html',
  styleUrls: ['./ingresopuertas.page.scss'],
})
export class IngresopuertasPage implements OnInit {

  codigo : string = '';
  nombre : string = '';
  precio : number = 0;
  foto : any;
  path:string = "";

  constructor(private crudpuertasService: CrudpuertasService, 
    private router : Router) { }

  ngOnInit() {
  }

  async OnGuardarPuertas(){
    console.log(this.foto);
      this.path = await this.OnNuevaImagenPuerta(this.foto);
      console.log(this.path);
      this.crudpuertasService.guardarPuerta(this.codigo, this.nombre, this.precio, this.path).then(producto =>{
        this.router.navigate(['/puertas']);
      }).catch(error => alert('No se pudo Guardar el producto Puerta.'))
  
    }
  
    async OnNuevaImagenPuerta(file : any){
      const path = 'Puertas';
      const name = file.name;
      const res = await this.crudpuertasService.upLoadImage(file, path, name);
      return res;
    }
  
    OnCargarImagenPuerta(event : any){
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
