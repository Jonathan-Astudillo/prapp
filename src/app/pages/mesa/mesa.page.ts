import { Component, OnInit } from '@angular/core';
import {CrudmesascentroService} from '../../servicios/crudmesascentro.service'
import {ProductoI} from '../../models/interface'
import { Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-mesa',
  templateUrl: './mesa.page.html',
  styleUrls: ['./mesa.page.scss'],
})
export class MesaPage implements OnInit {

  listaMesasCentro: ProductoI[];

  constructor(private crudmesascentroService: CrudmesascentroService) { }

  ngOnInit(){
    this.crudmesascentroService.getMesasCentro().subscribe(resp => {
      this.listaMesasCentro = resp;
    })
  }

}
