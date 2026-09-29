import { Component } from '@angular/core';

interface ItemNavBar {
  titulo: string;
  url: string;
  icone: string;
}

@Component({
  imports: [],
  selector: 'app-navbar',
  templateUrl: './navbar.html',
})

export class Navbar {
    public readonly itens: ItemNavBar[] = [
    { titulo: 'Sobre',
      url: '#Sobre',
      icone: 'bi-person'
    },
    {
      titulo: 'Habilidades',
      url: '#habilidades',
      icone: 'bi-compass'
    },
    {
      titulo: 'Portifólio',
      url: '#portifolio',
      icone: 'bi-briefcase'
    }
  ];
}
