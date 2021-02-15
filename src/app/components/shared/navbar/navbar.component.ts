import { Component, OnInit } from '@angular/core';

// Para poder navegar entre componentes
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(
     private router: Router
  ) { }

  ngOnInit(): void {
  }

  buscarHeroe( termino: string ){
    // primero pasamso la url como se declaro en las rutas y despues el valro que recibe
    this.router.navigate( ['/BuscarHeroe', termino ] );

  }

}
