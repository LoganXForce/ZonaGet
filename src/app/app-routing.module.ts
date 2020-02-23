import { NoticiasComponent } from './pages/noticias/noticias.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TecnologiaComponent } from './pages/tecnologia/tecnologia.component';
import { VideojuegosComponent } from './pages/videojuegos/videojuegos.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';



const routes: Routes = [
{
  path: 'noticias',
  component: NoticiasComponent
},
{
  path: 'tecnologia',
  component: TecnologiaComponent
},
{
  path: 'videojuegos',
  component: VideojuegosComponent
},
{
  path: 'pokemon',
  component: PokemonComponent
},
{
  path: 'posts',
  loadChildren: './pages/posts/posts.module#PostsModule'

},
{
  path: '**',
  redirectTo: 'noticias'
},
]



@NgModule({
  imports: [
    RouterModule.forRoot( routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
