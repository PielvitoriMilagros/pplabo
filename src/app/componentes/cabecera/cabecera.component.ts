import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
  }

  Redirecciona(donde:string){
    switch (donde) {
      case 'busqueda':
        this.router.navigate(['/busqueda']);
        break;
      case 'actorAlta':
        this.router.navigate(['/actor/alta']);
        break;
      case 'actorListado':
        this.router.navigate(['/actor/listado']);
        break;
      case 'peliculaAlta':
        this.router.navigate(['/peliculas/alta']);
        break;
      case 'peliculaListado':
        this.router.navigate(['/peliculas/listado']);
        break;
      case 'paisesListado':
        this.router.navigate(['/paises/listado']);
        break;
    }
  }
}
