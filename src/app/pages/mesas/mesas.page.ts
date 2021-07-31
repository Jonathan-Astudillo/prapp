import { Component, OnInit } from '@angular/core';
import {CrudmesasService} from '../../servicios/crudmesas.service'
import {ProductoI} from '../../models/interface'
import { Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-mesas',
  templateUrl: './mesas.page.html',
  styleUrls: ['./mesas.page.scss'],
})
export class MesasPage implements OnInit {

  listaMesas: ProductoI[];

  constructor(private crudmesasService: CrudmesasService) { }

  ngOnInit(){
    this.crudmesasService.getMesas().subscribe(resp => {
      this.listaMesas = resp;
    })
  }

}
