import { Component, OnInit } from '@angular/core';
import {CrudService} from '../../servicios/crud.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevoproducto',
  templateUrl: './nuevoproducto.page.html',
  styleUrls: ['./nuevoproducto.page.scss'],
})
export class NuevoproductoPage implements OnInit {

  codigo : string = '';
  nombre : string = '';
  precio : number = 0;
  foto : any;
  path:string = "";

  constructor(private crudService: CrudService, 
    private router : Router) { }

  ngOnInit() {
  }

  async OnGuardarProducto(){
  console.log(this.foto);
    this.path = await this.OnNuevaImagen(this.foto);
    console.log(this.path);
    this.crudService.guardarProducto(this.codigo, this.nombre, this.precio, this.path).then(producto =>{
      this.router.navigate(['/ventanas']);
    }).catch(error => alert('No se pudo Guardar producto Ventana.'))

  }

  async OnNuevaImagen(file : any){
    const path = 'Ventanas';
    const name = file.name;
    const res = await this.crudService.upLoadImage(file, path, name);
    return res;
  }

  OnCargarImagen(event : any){
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
