import { Component, OnInit } from '@angular/core';
import {CrudespejosService} from '../../servicios/crudespejos.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingresoespejos',
  templateUrl: './ingresoespejos.page.html',
  styleUrls: ['./ingresoespejos.page.scss'],
})
export class IngresoespejosPage implements OnInit {

  codigo : string = '';
  nombre : string = '';
  precio : number = 0;
  foto : any;
  path:string = "";

  constructor(private crudespejosService: CrudespejosService, 
    private router : Router) { }

  ngOnInit() {
  }

  async OnGuardarEspejos(){
    console.log(this.foto);
      this.path = await this.OnNuevaImagenEspejo(this.foto);
      console.log(this.path);
      this.crudespejosService.guardarEspejo(this.codigo, this.nombre, this.precio, this.path).then(producto =>{
        this.router.navigate(['/espejos']);
      }).catch(error => alert('No se pudo Guardar el producto Espejos.'))
  
    }

    async OnNuevaImagenEspejo(file : any){
      const path = 'Espejos';
      const name = file.name;
      const res = await this.crudespejosService.upLoadImage(file, path, name);
      return res;
    }
  
    OnCargarImagenEspejos(event : any){
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
