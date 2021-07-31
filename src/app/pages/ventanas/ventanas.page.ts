import { Component, OnInit } from '@angular/core';
import {CrudService} from '../../servicios/crud.service'
import {ProductoI} from '../../models/interface'
import { Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-ventanas',
  templateUrl: './ventanas.page.html',
  styleUrls: ['./ventanas.page.scss'],
})
export class VentanasPage implements OnInit {

  listaVentanas: ProductoI[];

  constructor(private crudService: CrudService) { }
  
    ngOnInit(){
      this.crudService.getVentanas().subscribe(resp => {
        this.listaVentanas = resp;
      })
    }

  }
