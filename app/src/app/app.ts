import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Start } from "./components/start/start/start";
import { ProminentAuthor } from "./components/prominent-author/prominent-author";
import { Catalog } from "./components/catalog/catalog";
import { Footer } from "./components/footer/footer";
import { BookList } from "./components/book-list/book-list";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Start, ProminentAuthor, Catalog, Footer, BookList],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('finereads');
}
