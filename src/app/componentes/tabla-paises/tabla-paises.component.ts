import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Pais } from '../../clases/pais';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent implements OnInit {

  @Input() listadoPaises: Pais[];
  @Output() detallePais : EventEmitter<Pais> = new EventEmitter<Pais>();

  constructor() { }

  ngOnInit(): void {
  }

  verDetalle(pais){
    this.detallePais.emit(pais);
  }

}
