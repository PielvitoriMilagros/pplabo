import { Injectable } from '@angular/core';
import { Actor } from '../clases/actor';

@Injectable({
  providedIn: 'root'
})
export class MisActoresService {

  actores:Actor[];

  constructor() {
    this.actores=[
      new Actor(1,'Leonardo','DiCaprio','Masculino','11/11/1974','https://smoda.elpais.com/wp-content/uploads/2019/08/leo-635x794.jpg','Argentina'),
      new Actor(2,'Keanu','Reeves','Masculino','02/09/1964','https://es.web.img3.acsta.net/pictures/17/02/06/17/01/343859.jpg','Argentina'),
      new Actor(3,'Shrek','Ogro','Masculino','01/04/1989','https://2.bp.blogspot.com/-wTIjMcZiLww/ULNs6itSWjI/AAAAAAAAACo/awq0ldRU3so/s1600/shrek+sonriendo.jpg','Argentina'),
      new Actor(4,'Ryan','Gosling','Masculino','12/11/1980','https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/RyanGosling10-19.JPG/220px-RyanGosling10-19.JPG','Argentina'),
      new Actor(5,'Kate','Winslet','Femenino','05/10/1975','https://upload.wikimedia.org/wikipedia/commons/9/9c/Kate_Winslet_March_18%2C_2014_%28headshot%29.jpg','Argentina'),
      new Actor(6,'Rachel','McAdams','Femenino','17/11/1978','https://upload.wikimedia.org/wikipedia/commons/8/8e/Rachel_McAdams_3.jpg','Argentina')
    ];

    localStorage.setItem('actores',JSON.stringify(this.actores));

   }


   obtenerActores(){
     return JSON.parse(localStorage.getItem('actores'));
   }


   
   altaActor(actorNuevo){

    let ultimoActor=this.actores[this.actores.length-1];
    let ultimoId = ultimoActor.id;

    actorNuevo.id=ultimoId+1;
    this.actores.push(actorNuevo);

    localStorage.setItem('actores',JSON.stringify(this.actores));

   }





}
