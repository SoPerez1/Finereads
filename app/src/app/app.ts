import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from "./components/footer/footer";
import { Start } from "./components/start/start";
import { Catalog } from "./components/catalog/catalog";
import { Ejercicios } from "./ejercicios/ejercicios";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, Start, Catalog, Ejercicios],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('finereads');
}
