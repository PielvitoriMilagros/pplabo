import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Peliculas } from '../../clases/peliculas';
import { PeliculasService } from 'src/app/servicios/peliculas.service';

@Component({
  selector: 'app-tabla-peliculas',
  templateUrl: './tabla-peliculas.component.html',
  styleUrls: ['./tabla-peliculas.component.css']
})
export class TablaPeliculasComponent implements OnInit {
  
  @Input() peliculas: Peliculas[]=[];
  @Output() detallePelicula : EventEmitter<Peliculas> = new EventEmitter<Peliculas>();

  constructor() {


  }

  ngOnInit(): void {
  }

  verDetalle(pelicula){
    this.detallePelicula.emit(pelicula);
  }

}
