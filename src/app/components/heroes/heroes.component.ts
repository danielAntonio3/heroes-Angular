import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../service/heroes.service';

// Necesario patra poder navegar de una pagina a otra
// se crea una variable privada en el costructor
import {Router} from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit {

  // Variable
  heroes: Heroe[] = [];

  // Constructor
  constructor(

    private heroesServer: HeroesService,
    private router: Router) {

    // console.log('constuctor');

   }


  // Funcione
  ngOnInit(): void {
    // de la siguiente manera podemos utilizar los servicios
    this.heroes = this.heroesServer.getHeroes();
    // console.log(this.heroes);
  }

  // funcion que enlaza a otra pagina enviado un id
  // tslint:disable-next-line: typedef
  verHeroe(idx: number){
    this.router.navigate(['/Heroe', idx] );
  }



}
