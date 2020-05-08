import { Component, OnInit } from '@angular/core';
import { Pais } from '../../clases/pais';
import { PaisesService } from '../../servicios/paises.service';
import { Actor } from 'src/app/clases/actor';
import { MisActoresService } from 'src/app/servicios/mis-actores.service';

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.css']
})
export class ActorAltaComponent implements OnInit {

  public paises: Pais[] = [];
  actores:Actor[];
  actorNuevo:Actor;
  detallePaisActual:Pais;


   constructor(private peliculasService: PaisesService, private misActores:MisActoresService) {

    this.actores = misActores.obtenerActores();

     this.peliculasService.obtenerPaises().subscribe( (resp:any)=>{
       resp.forEach(element => {
         const aux= new Pais(element.numericCode,element.name,element.flag,element.capital,element.population);
         this.paises.push(aux);
       });
     }, errores=>{
       console.log(errores);
     } );
    }

  ngOnInit(): void {

    this.actorNuevo=new Actor();

  }

  recibirPaisSeleccionado(paisSeleccionado){
    this.actorNuevo.paisDeOrigen=paisSeleccionado.nombre;
    this.detallePaisActual=paisSeleccionado;
  }


  agregarActor(){
    this.misActores.altaActor(this.actorNuevo);
  }



}
