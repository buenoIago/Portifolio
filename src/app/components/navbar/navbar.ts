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
      url: '#sobre',
      icone: 'bi-person'
    },
    {
      titulo: 'Habilidades',
      url: '#habilidades',
      icone: 'bi-compass'
    },
    {
      titulo: 'Projetos',
      url: '#projetos',
      icone: 'bi-briefcase'
    },
    {
      titulo: 'Contatos',
      url: '#contatos',
      icone: 'bi-person-lines-fill'
    }
  ];
}
