import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pais } from 'src/app/clases/pais';

@Component({
  selector: 'app-detalle-pais',
  templateUrl: './detalle-pais.component.html',
  styleUrls: ['./detalle-pais.component.css']
})
export class DetallePaisComponent implements OnInit {

  @Input() paisDetalle : Pais;
  @Output() deshabilitarPais : EventEmitter<Pais> = new EventEmitter<Pais>();

  constructor() { }

  ngOnInit(): void {
  }

  eliminarPais(){
    this.deshabilitarPais.emit(this.paisDetalle);
  }

}
