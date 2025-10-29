import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InyRecommendation {
  books = [
    { title: 'A Court of Mist and Fury', calification: '5/5', image: 'assets/portadas/nieblaFuria.jpg' },
    { title: 'The Name of the Wind', calification: '5/5', image: 'assets/portadas/misterio3.jpg' },
    { title: 'The Library of the Dead', calification: '4/5', image: 'assets/portadas/misterio2.jpg' },
    { title: 'The Oxford Murders', calification: '4/5', image: 'assets/portadas/misterio1.jpg' },
    { title: 'The Book of Azrael', calification: '4/5', image: 'assets/portadas/libroAzrael.jpg' },
    { title: 'A Court of Frost and Starlight', calification: '1.5/5', image: 'assets/portadas/hielosEstrellas.jpg' },
    { title: 'A Kingdom of Flesh and Fire', calification: '4/5', image: 'assets/portadas/carneFuego.jpg' },
    { title: 'Binding 13', calification: '2/5', image: 'assets/portadas/binding13.jpg' },
    { title: 'In the Dark', calification: '3/5', image: 'assets/portadas/aOscuras.jpg' },
    { title: 'Wings of Blood', calification: '4/5', image: 'assets/portadas/alasSangre.jpg' },
    { title: 'Wings of Iron', calification: '4/5', image: 'assets/portadas/alasHierro.jpg' },
    { title: 'Add New Rating', image: 'assets/portadas/portadaBlanco.jpg' },
  ];

  constructor() { }

  getBooks() {
    return this.books;
  }
}
