import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Start } from "./components/start/start/start";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Start],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Scriba');
}
