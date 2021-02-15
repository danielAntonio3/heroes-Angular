import { Component, OnInit } from '@angular/core';

// importamos el modulo que nos permite leer los valores del la url
import { ActivatedRoute } from '@angular/router';

// importar el servicio
import { HeroesService } from '../../service/heroes.service';

import { HeroesComponent} from '../heroes/heroes.component';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

    heroes: any[] = [];
    termino: string;
  constructor(
    // creamos una variable en el costructor para poder usar el ActivatedRoute
      private activatedRoute: ActivatedRoute,
      private heroesService: HeroesService
  ) { }

  ngOnInit(): void {

  // De la siguiente manera podemos extraes el valor de la url
  this.activatedRoute.params.subscribe( params =>{
    this.termino = params['termino'];
    this.heroes = this.heroesService.buscarHeroe( params['termino']);
    //console.log(this.heroes);
  });

  }

}
