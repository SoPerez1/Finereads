import { Component, EventEmitter } from '@angular/core';
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
    title: 'Alas de Sangre',
    author: 'Rebecca Yarros',
    year: 2023,
    description: 'Violet Sorrengail entra en una academia militar donde debe aprender a montar dragones. Entre batallas, magia y romance, se enfrenta a su destino con fuego y coraje.',
    image: 'assets/portadas/alasSangre.jpg'
  },
  {
    title: 'Alas de Hierro',
    author: 'Rebecca Yarros',
    year: 2024,
    description: 'La secuela de “Alas de Sangre” continúa con Violet desafiando las reglas del imperio y enfrentándose a secretos que podrían cambiarlo todo.',
    image: 'assets/portadas/alasHierro.jpg'
  },
  {
    title: 'Una Corte de Rosas y Espinas',
    author: 'Sarah J. Maas',
    year: 2015,
    description: 'Feyre, una cazadora humana, es arrastrada al mundo de las hadas tras matar a una criatura mágica. Allí descubrirá un oscuro secreto y un amor imposible.',
    image: 'assets/portadas/rosasEspinas.jpg'
  },
  {
    title: 'Una Corte de Niebla y Furia',
    author: 'Sarah J. Maas',
    year: 2016,
    description: 'Feyre debe enfrentarse a las secuelas de su tiempo en Bajo la Montaña y descubrir el poder que la conecta con Rhysand y la Corte Noche.',
    image: 'assets/portadas/nieblaFuria.jpg'
  },
  {
    title: 'Una Corte de Hielo y Estrellas',
    author: 'Sarah J. Maas',
    year: 2018,
    description: 'Una historia puente que muestra cómo Feyre, Rhysand y sus amigos intentan reconstruir Velaris tras la guerra, mientras enfrentan nuevas amenazas.',
    image: 'assets/portadas/hielosEstrellas.jpg'
  },
  {
    title: 'Ciudad de Media Luna: Casa de Tierra y Sangre',
    author: 'Sarah J. Maas',
    year: 2020,
    description: 'Bryce Quinlan busca justicia tras una tragedia que cambia su vida, en una ciudad donde humanos, ángeles, demonios y hadas conviven bajo un velo de secretos.',
    image: 'assets/portadas/casaTierraSangre.jpg'
  },
  {
    title: 'Ciudad de Media Luna: Casa de Cielo y Aliento',
    author: 'Sarah J. Maas',
    year: 2022,
    description: 'Bryce y Hunt deben decidir si seguir las reglas del Asteri o rebelarse, mientras un nuevo peligro amenaza todo lo que aman.',
    image: 'assets/portadas/casaCieloAliento.jpg'
  },
  {
    title: 'Ciudad de Media Luna: Casa de Fuego y Sombra',
    author: 'Sarah J. Maas',
    year: 2024,
    description: 'Bryce se encuentra en un nuevo mundo, mientras intenta regresar a su hogar y descubrir la verdad sobre los Asteri.',
    image: 'assets/portadas/casaFuegoSombra.jpg'
  },
  {
    title: 'Rivales Divinos',
    author: 'Rebecca Ross',
    year: 2023,
    description: 'En medio de una guerra entre dioses, dos periodistas rivales descubren una conexión mágica a través de cartas y un amor que desafía la guerra.',
    image: 'assets/portadas/rivalesDivinos.jpg'
  },
  {
    title: 'El Reino del Puente',
    author: 'Danielle L. Jensen',
    year: 2019,
    description: 'Lara, una princesa espía, se infiltra en el reino enemigo para destruirlo desde adentro, pero se enamora del rey al que debía traicionar.',
    image: 'assets/portadas/reinoPuente.jpg'
  },
  {
    title: 'El Libro de Azrael',
    author: 'Amber V. Nicole',
    year: 2022,
    description: 'Alara, una mujer inmortal, se ve obligada a cooperar con un poderoso enemigo para evitar que un antiguo mal despierte.',
    image: 'assets/portadas/libroAzrael.jpg'
  },
  {
    title: 'Agregar nuevo libro',
    author: '',
    year: '',
    description: '',
    image: 'assets/portadas/portadaBlanco.jpg'
  }
];

selectBook : string = '';

  onSelect(bookTitle: string): void {
    this.selectBook = bookTitle;
  }

}
