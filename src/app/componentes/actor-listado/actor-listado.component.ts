import { Component, OnInit } from '@angular/core';
import { MisActoresService } from 'src/app/servicios/mis-actores.service';
import { Actor } from 'src/app/clases/actor';

@Component({
  selector: 'app-actor-listado',
  templateUrl: './actor-listado.component.html',
  styleUrls: ['./actor-listado.component.css']
})
export class ActorListadoComponent implements OnInit {

  actores:Actor[];

  constructor(private misActores:MisActoresService) { 
    this.actores=misActores.obtenerActores();
  }

  ngOnInit(): void {
  }

}
