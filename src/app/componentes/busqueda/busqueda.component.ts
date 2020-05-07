import { Component, OnInit } from '@angular/core';
import { Peliculas } from 'src/app/clases/peliculas';
import { PeliculasService } from '../../servicios/peliculas.service';
import { MiServicioService } from '../../servicios/mi-servicio.service';
import { MisActoresService } from 'src/app/servicios/mis-actores.service';
import { Actor } from 'src/app/clases/actor';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  detallePeliculaActual:Peliculas;
  public peliculas: Peliculas[] = [];
  public actores: Actor[] = [];
  
  recibirDetallePelicula(e){
    this.detallePeliculaActual = e;
  }

  constructor(private miServicio:MiServicioService, private misActores:MisActoresService){
    this.peliculas=miServicio.obtenerPeliculas();
    this.actores = misActores.obtenerActores();
  }



  // constructor(private peliculasService: PeliculasService) {

  //   this.peliculasService.obtenerPeliculas().subscribe( (resp:any)=>{
  //     const films = resp.Search;
  //     films.forEach(element => {
  //       const aux= new Peliculas(element.imdbID,element.Title,element.Type,element.Year,element.Year,element.Poster);
  //       this.peliculas.push(aux);
  //     });
  //   }, errores=>{
  //     console.log(errores);
  //   } );

  // }

  ngOnInit(): void {
  }

}
