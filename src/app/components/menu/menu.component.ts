import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  rutas = [
    {
      name: 'Noticias',
      path: '/noticias'
    },
    {
      name: 'Tecnologia',
      path: '/tecnologia'
    },
    {
      name: 'Videojuegos',
      path: '/videojuegos'
    },
    {
      name: 'Digimones',
      path: '/posts'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
