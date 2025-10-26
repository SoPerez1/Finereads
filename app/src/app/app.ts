import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from "./components/footer/footer";
import { Start } from "./components/start/start";
import { Catalog } from "./components/catalog/catalog";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, Start, Catalog],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('finereads');
}
