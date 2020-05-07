import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Peliculas } from '../clases/peliculas';
import { Actor } from '../clases/actor';

@Injectable({
  providedIn: 'root'
})
export class MiServicioService {

  peliculas: Peliculas[];


  constructor(private httpClient: HttpClient) {

    this.peliculas = [
      new Peliculas('1', 'Shrek', 'Comedia', 1996, 1234123, 'https://assets.show.news/__export/1584910471551/sites/debate/img/2020/03/22/portada-shrek_crop1584910323380.jpg_943222218.jpg', [
        new Actor(3, 'Shrek', 'Ogro', 'Masculino', '01/04/1989', 'https://2.bp.blogspot.com/-wTIjMcZiLww/ULNs6itSWjI/AAAAAAAAACo/awq0ldRU3so/s1600/shrek+sonriendo.jpg','Argentina')
      ]),
      new Peliculas('2', 'It', 'Terror', 1987, 34123412, 'https://assets.debate.com.mx/__export/1504898708597/sites/debate/img/2017/09/08/payasooo.jpg_899757882.jpg', [
        new Actor(4, 'Ryan', 'Gosling', 'Masculino', '12/11/1980', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/RyanGosling10-19.JPG/220px-RyanGosling10-19.JPG','Argentina'),
      ]),
      new Peliculas('3', 'Titanic', 'Amor', 1972, 1234252345235, 'https://i.pinimg.com/originals/d4/92/6d/d4926d84c1db1fcd6dc7b4a47a3a5848.jpg', [
        new Actor(5, 'Kate', 'Winslet', 'Femenino', '05/10/1975', 'https://upload.wikimedia.org/wikipedia/commons/9/9c/Kate_Winslet_March_18%2C_2014_%28headshot%29.jpg','Argentina'),
        new Actor(1, 'Leonardo', 'DiCaprio', 'Masculino', '11/11/1974', 'https://smoda.elpais.com/wp-content/uploads/2019/08/leo-635x794.jpg','Argentina')
      ]),
      new Peliculas('4', 'Matrix', 'Otros', 2002, 34523542352, 'https://www.iglesiaorganica.com/wp-content/uploads/2018/04/matrix.jpg', [
        new Actor(2, 'Keanu', 'Reeves', 'Masculino', '02/09/1964', 'https://es.web.img3.acsta.net/pictures/17/02/06/17/01/343859.jpg','Argentina')
      ])
    ];

    localStorage.setItem('peliculas', JSON.stringify(this.peliculas));

  }

  obtenerPeliculas() {
    return JSON.parse(localStorage.getItem('peliculas'));
  }


  eliminarPeliculaPorId(peliculaEliminar: Peliculas) {
    let indexAEliminar = -1;
    for (let index = 0; index < this.peliculas.length; index++) {
      if (this.peliculas[index].id == peliculaEliminar.id) {
        indexAEliminar = index;
      }

    }
    if (indexAEliminar != -1) {
      this.peliculas.splice(indexAEliminar, 1);
      localStorage.setItem('peliculas', JSON.stringify(this.peliculas));
    }

  }


  altaPelicula(peliculaNueva){

    
    let ultimaPeli=this.peliculas[this.peliculas.length-1];
    let ultimoId = ultimaPeli.id;

    peliculaNueva.id=ultimoId+1;
    this.peliculas.push(peliculaNueva);

    localStorage.setItem('peliculas',JSON.stringify(this.peliculas));


  }



}
