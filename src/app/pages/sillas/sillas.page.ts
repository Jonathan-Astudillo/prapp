import { Component, OnInit } from '@angular/core';
import {CrudsillasService} from '../../servicios/crudsillas.service'
import {ProductoI} from '../../models/interface'
import { Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-sillas',
  templateUrl: './sillas.page.html',
  styleUrls: ['./sillas.page.scss'],
})
export class SillasPage implements OnInit {

  listaSillas: ProductoI[];

  constructor(private crudsillasService: CrudsillasService) { }

  ngOnInit(){
    this.crudsillasService.getSillas().subscribe(resp => {
      this.listaSillas = resp;
    })
  }
}
