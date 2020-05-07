import { Component, OnInit } from '@angular/core';
import { PaisesService } from '../../servicios/paises.service';
import { Pais } from '../../clases/pais';

@Component({
  selector: 'app-paises-listado',
  templateUrl: './paises-listado.component.html',
  styleUrls: ['./paises-listado.component.css']
})
export class PaisesListadoComponent implements OnInit {


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
