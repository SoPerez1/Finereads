import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() {}

  getBooks() {
    return [
      {
        title: 'Wings of Blood',
        author: 'Rebecca Yarros',
        year: 2023,
        description: 'Violet Sorrengail enters a military academy where she must learn to ride dragons. Amid battles, magic, and romance, she faces her destiny with fire and courage.',
        image: 'assets/portadas/alasSangre.jpg'
      },
      {
        title: 'Wings of Iron',
        author: 'Rebecca Yarros',
        year: 2024,
        description: 'The sequel to "Wings of Blood" continues with Violet defying the empire’s rules and confronting secrets that could change everything.',
        image: 'assets/portadas/alasHierro.jpg'
      },
      {
        title: 'A Court of Thorns and Roses',
        author: 'Sarah J. Maas',
        year: 2015,
        description: 'Feyre, a human huntress, is dragged into the world of the fae after killing a magical creature. There she uncovers a dark secret and an impossible love.',
        image: 'assets/portadas/rosasEspinas.jpg'
      },
      {
        title: 'A Court of Mist and Fury',
        author: 'Sarah J. Maas',
        year: 2016,
        description: 'Feyre must face the aftermath of her time Under the Mountain and discover the power that connects her to Rhysand and the Night Court.',
        image: 'assets/portadas/nieblaFuria.jpg'
      },
      {
        title: 'A Court of Frost and Starlight',
        author: 'Sarah J. Maas',
        year: 2018,
        description: 'A bridge story showing how Feyre, Rhysand, and their friends try to rebuild Velaris after the war while facing new threats.',
        image: 'assets/portadas/hielosEstrellas.jpg'
      },
      {
        title: 'Crescent City: House of Earth and Blood',
        author: 'Sarah J. Maas',
        year: 2020,
        description: 'Bryce Quinlan seeks justice after a life-changing tragedy in a city where humans, angels, demons, and fae coexist under a veil of secrets.',
        image: 'assets/portadas/casaTierraSangre.jpg'
      },
      {
        title: 'Crescent City: House of Sky and Breath',
        author: 'Sarah J. Maas',
        year: 2022,
        description: 'Bryce and Hunt must decide whether to follow the Asteri’s rules or rebel, while a new threat endangers everything they love.',
        image: 'assets/portadas/casaCieloAliento.jpg'
      },
      {
        title: 'Crescent City: House of Flame and Shadow',
        author: 'Sarah J. Maas',
        year: 2024,
        description: 'Bryce finds herself in a new world while trying to return home and uncover the truth about the Asteri.',
        image: 'assets/portadas/casaFuegoSombra.jpg'
      },
      {
        title: 'Divine Rivals',
        author: 'Rebecca Ross',
        year: 2023,
        description: 'Amid a war between gods, two rival journalists discover a magical connection through letters and a love that defies the war.',
        image: 'assets/portadas/rivalesDivinos.jpg'
      },
      {
        title: 'The Bridge Kingdom',
        author: 'Danielle L. Jensen',
        year: 2019,
        description: 'Lara, a spy princess, infiltrates the enemy kingdom to destroy it from within but falls in love with the king she was meant to betray.',
        image: 'assets/portadas/reinoPuente.jpg'
      },
      {
        title: 'The Book of Azrael',
        author: 'Amber V. Nicole',
        year: 2022,
        description: 'Alara, an immortal woman, is forced to cooperate with a powerful enemy to prevent an ancient evil from awakening.',
        image: 'assets/portadas/libroAzrael.jpg'
      }
    ];
  }
}
