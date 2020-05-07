import { Component, OnInit } from '@angular/core';
import { MisActoresService } from '../../servicios/mis-actores.service';
import { Actor } from '../../clases/actor';
import { MiServicioService } from '../../servicios/mi-servicio.service';
import { Peliculas } from '../../clases/peliculas';

@Component({
  selector: 'app-pelicula-alta',
  templateUrl: './pelicula-alta.component.html',
  styleUrls: ['./pelicula-alta.component.css']
})
export class PeliculaAltaComponent implements OnInit {

  actores:Actor[];
  peliculas:Peliculas[];
  peliculaNueva:Peliculas;

  constructor(private misActores:MisActoresService, private misPeliculas:MiServicioService) { 
    this.actores = misActores.obtenerActores();
    this.peliculas = misPeliculas.obtenerPeliculas();
  }

  ngOnInit(): void {
    this.peliculaNueva=new Peliculas();
  }

  recibirActorSeleccionado(actorSeleccionado){
    this.peliculaNueva.actores=actorSeleccionado;
  }



  agregarPelicula(){

    this.misPeliculas.altaPelicula(this.peliculaNueva);





  }

}
