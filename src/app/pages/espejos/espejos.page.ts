import { Component, OnInit } from '@angular/core';
import {CrudespejosService} from '../../servicios/crudespejos.service'
import {ProductoI} from '../../models/interface'
import { Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-espejos',
  templateUrl: './espejos.page.html',
  styleUrls: ['./espejos.page.scss'],
})
export class EspejosPage implements OnInit {

  listaEspejos: ProductoI[];

  constructor(private crudespejosService: CrudespejosService) { 
  }

  ngOnInit(){
    this.crudespejosService.getEspejos().subscribe(resp => {
      this.listaEspejos = resp;
    })
  }
  
}
