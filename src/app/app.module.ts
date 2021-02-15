import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas del sistema
// las ruras se agregan en imports
import { APP_ROUTING } from './app.routes';


// Servicios
// los servicios se agregan en providers 
import { HeroesService } from './service/heroes.service';


// Componentes
// los componentes se agregan en declarations
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BuscadorComponent } from './components/buscador/buscador.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    BuscadorComponent
  ],
  imports: [
    BrowserModule,
    // Aqui es donde se incluye las rutas del sistema
    APP_ROUTING
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
