import { Component, OnInit } from '@angular/core';
import {CrudmesascentroService} from '../../servicios/crudmesascentro.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingresomesascentro',
  templateUrl: './ingresomesascentro.page.html',
  styleUrls: ['./ingresomesascentro.page.scss'],
})
export class IngresomesascentroPage implements OnInit {

  codigo : string = '';
  nombre : string = '';
  precio : number = 0;
  foto : any;
  path:string = "";

  constructor(private crudmesascentroService: CrudmesascentroService, 
    private router : Router) { }

  ngOnInit() {
  }

  async OnGuardarMesasCentro(){
    console.log(this.foto);
      this.path = await this.OnNuevaImagenMesaCentro(this.foto);
      console.log(this.path);
      this.crudmesascentroService.guardarMesaCentro(this.codigo, this.nombre, this.precio, this.path).then(producto =>{
        this.router.navigate(['/mesa']);
      }).catch(error => alert('No se pudo Guardar el producto Mesas de Centro.'))
  
    }

    async OnNuevaImagenMesaCentro(file : any){
      const path = 'MesasCentro';
      const name = file.name;
      const res = await this.crudmesascentroService.upLoadImage(file, path, name);
      return res;
    }
  
    OnCargarImagenMesasCentro(event : any){
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
