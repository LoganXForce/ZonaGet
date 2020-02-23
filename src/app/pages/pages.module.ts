import { NoticiasComponent } from './noticias/noticias.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TecnologiaComponent } from './tecnologia/tecnologia.component';
import { VideojuegosComponent } from './videojuegos/videojuegos.component';
import { PokemonComponent } from './pokemon/pokemon.component';



@NgModule({
  declarations: [
    NoticiasComponent,
    TecnologiaComponent,
    VideojuegosComponent,
    PokemonComponent
  ],
  exports: [
    NoticiasComponent,
    TecnologiaComponent,
    VideojuegosComponent,
    PokemonComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
