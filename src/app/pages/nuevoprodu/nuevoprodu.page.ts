import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService1 } from 'src/app/servicios/crud.service1';

@Component({
  selector: 'app-nuevoprodu',
  templateUrl: './nuevoprodu.page.html',
  styleUrls: ['./nuevoprodu.page.scss'],
})
export class NuevoproduPage implements OnInit {

  codigo : string = '';
  nombre : string = '';
  precio : number = 0;
  foto : any;
  path:string = "";

  constructor(private crudService1: CrudService1, private router : Router) { }

  ngOnInit() {
  }

  async OnGuardarProducto(){
  console.log(this.foto);
    this.path = await this.OnNuevaImagen(this.foto);
    console.log(this.path);
    this.crudService1.guardarProducto(this.codigo, this.nombre, this.precio, this.path).then(producto =>{
      this.router.navigate(['/Puertas',]);
    }).catch(error => alert('No se pudo Guardar Producto.'))

  }

  async OnNuevaImagen(file : any){
    const path = 'Puertas' ;
    const name = file.name;
    const res = await this.crudService1.upLoadImage(file, path, name);
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

