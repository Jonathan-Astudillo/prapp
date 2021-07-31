import { Component, OnInit } from '@angular/core';
import {CrudmesasService} from '../../servicios/crudmesas.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingresomesas',
  templateUrl: './ingresomesas.page.html',
  styleUrls: ['./ingresomesas.page.scss'],
})
export class IngresomesasPage implements OnInit {

  codigo : string = '';
  nombre : string = '';
  precio : number = 0;
  foto : any;
  path:string = "";

  constructor(private crudmesasService: CrudmesasService, 
    private router : Router) { }

  ngOnInit() {
  }

  async OnGuardarMesas(){
    console.log(this.foto);
      this.path = await this.OnNuevaImagenMesa(this.foto);
      console.log(this.path);
      this.crudmesasService.guardarMesa(this.codigo, this.nombre, this.precio, this.path).then(producto =>{
        this.router.navigate(['/mesas']);
      }).catch(error => alert('No se pudo Guardar el producto Mesa.'))
  
    }
  
    async OnNuevaImagenMesa(file : any){
      const path = 'Mesas';
      const name = file.name;
      const res = await this.crudmesasService.upLoadImage(file, path, name);
      return res;
    }
  
    OnCargarImagenMesa(event : any){
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
