import { Component, OnInit, Input } from '@angular/core';
import { Pais } from '../../clases/pais';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent implements OnInit {

  @Input() listadoPaises: Pais[];

  constructor() { }

  ngOnInit(): void {
  }

}
