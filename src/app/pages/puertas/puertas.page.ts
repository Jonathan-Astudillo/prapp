import { Component, OnInit } from '@angular/core';
import {CrudpuertasService} from '../../servicios/crudpuertas.service'
import {ProductoI} from '../../models/interface'
import { Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-puertas',
  templateUrl: './puertas.page.html',
  styleUrls: ['./puertas.page.scss'],
})
export class PuertasPage implements OnInit {

  listaPuertas: ProductoI[];

  constructor(private crudpuertasService: CrudpuertasService) { }

  ngOnInit(){
    this.crudpuertasService.getPuertas().subscribe(resp => {
      this.listaPuertas = resp;
    })
  }

}
