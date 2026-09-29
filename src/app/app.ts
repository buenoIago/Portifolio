import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

interface ItemNavBar {
  titulo: string;
  url: string;
  icone: string;
}
@Component({
  imports: [],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  // Raiz/Startup do Projeto
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
