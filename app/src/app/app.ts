import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Start } from "./components/start/start/start";
import { ProminentAuthor } from "./components/prominent-author/prominent-author";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Start, ProminentAuthor],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('finereads');
}
