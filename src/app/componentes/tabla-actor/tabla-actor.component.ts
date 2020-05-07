import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Actor } from 'src/app/clases/actor';

@Component({
  selector: 'app-tabla-actor',
  templateUrl: './tabla-actor.component.html',
  styleUrls: ['./tabla-actor.component.css']
})
export class TablaActorComponent implements OnInit {

  @Input() actores: Actor[]=[];
  @Output() actorSeleccionado : EventEmitter<Actor> = new EventEmitter<Actor>();

  constructor() { }

  ngOnInit(): void {
  }

  seleccionarActor(actor){
    this.actorSeleccionado.emit(actor);
  }

}
