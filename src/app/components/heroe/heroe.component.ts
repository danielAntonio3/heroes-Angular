import { Component } from '@angular/core';

// Para poder obtener el valor de la url en este caso el id
import { ActivatedRoute } from '@angular/router';

// importar el servicio donde se encuentran los heroes
import { HeroesService } from '../../service/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

    // Variables
    Heroe: any = { };

  constructor(
     private activatedRouter: ActivatedRoute,
     private heroesService: HeroesService
  ) {
    // Para poder estraer los parametros de la url (todos)
    this.activatedRouter.params.subscribe(parametros => {
      // el id es como se coloca el la ruta
      // console.log(parametros.id);
      this.Heroe = this.heroesService.getHeroe(parametros.id);

    });

   }


}
