import { Component, OnInit } from '@angular/core';
import { Pais } from '../../clases/pais';
import { PaisesService } from '../../servicios/paises.service';

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.css']
})
export class ActorAltaComponent implements OnInit {

  public paises: Pais[] = [];


   constructor(private peliculasService: PaisesService) {

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
  }

}
