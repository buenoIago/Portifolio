import { Component } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Sobre } from './components/sobre/sobre';
import { Habilidades } from './components/habilidades/habilidades';
import { Projetos } from './components/projetos/projetos';
import { Contatos } from './components/contatos/contatos';
import { Inicio } from './components/inicio/inicio';

@Component({
  imports: [Navbar, Inicio, Sobre, Habilidades, Projetos, Contatos],
  selector: 'app-root',
  templateUrl: './app.html',
})
export class App {}
