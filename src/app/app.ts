import { Component } from '@angular/core';
import { Navbar } from './components/navbar/navbar';

@Component({
  imports: [Navbar],
  selector: 'app-root',
  templateUrl: './app.html',
})
export class App {}
