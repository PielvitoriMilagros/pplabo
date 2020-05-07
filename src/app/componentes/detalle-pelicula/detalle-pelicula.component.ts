import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Peliculas } from 'src/app/clases/peliculas';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.css']
})
export class DetallePeliculaComponent implements OnInit {

  @Input() peliculaDetalle : Peliculas;
  @Output() borrarPelicula : EventEmitter<Peliculas> = new EventEmitter<Peliculas>();

  constructor() { }

  ngOnInit(): void {
  }

  eliminarPelicula(){
    this.borrarPelicula.emit(this.peliculaDetalle);
  }

}
