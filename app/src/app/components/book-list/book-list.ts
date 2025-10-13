import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookItem } from "../book-item/book-item";
@Component({
  selector: 'app-book-list',
  imports: [CommonModule, BookItem],
  templateUrl: './book-list.html',
  styleUrls: ['./book-list.css']
})
export class BookList {
books = [
    {
        "title": "Alas de sangre",
        "author": "Rebecca Yarros",
        "year": 2023,
        "description": "Violet Sorrengail entra en una academia militar donde debe aprender a montar dragones. Entre batallas, magia y un romance prohibido, la historia mezcla acción, emoción y pasión."
    },
    {
        "title": "Una corte de rosas y espinas",
        "author": "Sarah J. Maas",
        "year": 2015,
        "description": "Feyre, una cazadora humana, es llevada al reino de las hadas después de matar a una criatura mágica. Allí descubre secretos, magia y un amor que pondrá su vida en peligro."
    },
    {
        "title": "Tormenta de ónix (Onyx Storm)",
        "author": "Rebecca Yarros",
        "year": 2025,
        "description": "Tercera parte de la saga Empíreo. Dragones, alianzas, traiciones y una relación amorosa que crece en medio del caos. Muy esperado por los fans de 'Alas de sangre'."
    },
    {
        "title": "Ciudad de media luna: Casa de tierra y sangre",
        "author": "Sarah J. Maas",
        "year": 2020,
        "description": "Bryce Quinlan debe resolver un crimen sobrenatural mientras enfrenta sus propios demonios y una intensa conexión con un ángel caído. Fantasía urbana con romance épico."
    },
    {
        "title": "Ciudad de media luna: Casa de cielo y aliento",
        "author": "Sarah J. Maas",
        "year": 2022,
        "description": "Segunda parte de la saga. Bryce y Hunt se ven envueltos en conspiraciones políticas y mágicas, mientras su relación se pone a prueba."
    },
    {
        "title": "Ciudad de media luna: Casa de fuego y sombra",
        "author": "Sarah J. Maas",
        "year": 2024,
        "description": "La conclusión de la trilogía. Bryce lucha por salvar su mundo mientras se enfrenta a pérdidas, revelaciones y un amor que desafía al destino."
    },
    {
        "title": "Las guerras del huracán",
        "author": "Thea Guanzon",
        "year": 2023,
        "description": "Inspirada en la mitología del sudeste asiático, cuenta la historia de una princesa guerrera y su enemigo mortal. La tensión entre ellos se convierte en un amor peligroso."
    },
    {
        "title": "Rivales divinos",
        "author": "Rebecca Ross",
        "year": 2023,
        "description": "Dos periodistas rivales se escriben cartas sin saber quién está del otro lado. Entre guerras y dioses, surge un amor tierno y mágico."
    },
    {
        "title": "El reino del puente",
        "author": "Danielle L. Jensen",
        "year": 2019,
        "description": "Lara es enviada como espía para casarse con un rey enemigo, pero el odio se transforma en amor mientras descubre verdades que podrían destruir ambos reinos."
    },
    {
        "title": "Rey de batalla y sangre",
        "author": "Scarlett St. Clair",
        "year": 2021,
        "description": "Isolde es obligada a casarse con un rey vampiro para mantener la paz. Lo que comienza como una unión política se convierte en un amor apasionado y oscuro."
    }
];
selectBook : string = '';

  onSelect(bookTitle: string): void {
    this.selectBook = bookTitle;
  }

}
