import { Component, OnInit } from '@angular/core';
import { Peliculas } from 'src/app/clases/peliculas';
import { PeliculasService } from 'src/app/servicios/peliculas.service';
import { MiServicioService } from 'src/app/servicios/mi-servicio.service';

@Component({
  selector: 'app-pelicula-listado',
  templateUrl: './pelicula-listado.component.html',
  styleUrls: ['./pelicula-listado.component.css']
})
export class PeliculaListadoComponent implements OnInit {

  detallePeliculaActual:Peliculas;
  peliculas: Peliculas[] = [];
  peliculaParaEliminar:Peliculas;
  
  constructor(private miServicio:MiServicioService){
    this.peliculas=miServicio.obtenerPeliculas();
  }

  recibirDetallePelicula(e){
    this.detallePeliculaActual = e;
  }

  recibirBorrarPelicula(e){
    this.miServicio.eliminarPeliculaPorId(e);
    this.peliculas=this.miServicio.obtenerPeliculas();
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
